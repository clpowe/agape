<script setup lang="ts">
const { data: items } = await useAsyncData("navigation-items", () => {
  return queryCollection("navigation").all();
});
</script>

<template>
  <footer class="section wrapper" data-width="wide">
    <div class="flex">
      <nav>
        <ul>
          <li v-for="item in items" :key="item.id">
            <NuxtLink :to="item.to">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li v-for="item in items?.find((i) => i.label === 'services')?.children" :key="item.label">
            <NuxtLink :to="item.to">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--color-secondary-950);
  color: var(--color-secondary-50);
}
</style>