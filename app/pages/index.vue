<script setup lang="ts">

const { $clientPosthog } = useNuxtApp();

const { data: home } = await useAsyncData(() =>
  queryCollection("content").path("/").first(),
);

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
});

onMounted(() => {
  $clientPosthog?.capture("$pageview", {
    pagename: "home",
  })



  const applyButton = document.getElementById('apply-button');
  if (applyButton) {
    applyButton.addEventListener('click', () => {
      $clientPosthog?.capture('$autocapture', {
        element: 'apply-button',
        name: "Appy Now Click"
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
