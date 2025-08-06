<script setup lang="ts">

const { $clientPosthog } = useNuxtApp()

function handleClick() {
  console.log('Custom event captured');
  $clientPosthog?.capture('home_main_cta_clicked', {
        element: 'apply-button',
        name: "Appy Now Click",
        'user_name': "Max the Hedgehog"
      });
  }
</script>


<template>
  <UButton :to="{name:'apply'}" @click="handleClick">
Apply Now
  </UButton>
</template>
