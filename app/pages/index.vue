<script setup lang="ts">
const { $clientPosthog } = useNuxtApp()

const { data: home } = await useAsyncData(() =>
  queryCollection("content").path("/").first(),
);

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
});

onMounted(() => {
  const applyButton = document.getElementById('apply-button');
  if (applyButton) {
    applyButton.addEventListener('click', () => {
      console.log('Custom event captured');
      $clientPosthog?.capture('home_main_cta_clicked', {
        element: 'apply-button',
        name: "Appy Now Click",
        'user_name': "Max the Hedgehog"
      });
    });
  }
})

</script>

<template>
  <div>
    <ContentRenderer v-if="home" :value="home" class="flow content-grid" />
  </div>
</template>
