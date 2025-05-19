<script setup lang="ts">
const props = defineProps({
	title: String,
});
</script>

<template>
  <li>
    <NavigationMenuLink as-child>
      <a v-bind="$attrs" class="ListItemLink">
        <div class="ListItemHeading">
          {{ props.title }}
        </div>
        <p class="ListItemText">
          <slot />
        </p>
      </a>
    </NavigationMenuLink>
  </li>
</template>
