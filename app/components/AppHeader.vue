<script setup lang="ts">
const { data: items } = await useAsyncData(() => {
  return queryCollection("navigation").all();
});
</script>

<template>
  <header>
    <p>Agape Christian Bar Prep</p>
    <nav>
      <ul>
        <li v-for="item in items" :key="item.id">
          <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
          <ul v-if="item.children">
            <li v-for="child in item.children" :key="child.id">
              <NuxtLink :to="child.to">{{ child.label }}</NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>
