<script setup lang="ts">
import AgapeLogo from "~/assets/icons/agape-logo.svg";

const { data: items } = await useAsyncData("navigation-items", () => {
	return queryCollection("navigation").all();
});

const { y } = useWindowScroll();
const scrollThreshold = 50;
const isScrolled = computed(() => y.value > scrollThreshold);
</script>

<template>
  <UHeader
  mode="drawer"
    class=" border-none bg-elevated shadow-md w-full h-[--ui-header-height] py-4 mx-auto sticky top-0 z-50 transition-all duration-500 ease-(--easing)"
    :class="{
      'backdrop-blur border-b border-default w-fit min-w-fit top-4 rounded-full': isScrolled
    }"

  >
    <template #left>
      <NuxtLink to="/">
        <AgapeLogo class="w-14 h-14 transition-all duration-300" :font-controlled="false" />
      </NuxtLink>
    </template>

    <UNavigationMenu :items="items" :arrow="false" :ui="{
      link:'text-lg capitalize group relative w-full flex items-center gap-1.5 font-medium before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2',
      childLink: 'group size-full px-3 text-lg py-2 rounded-md flex items-start gap-2 text-start ',
      viewport: 'bg-elevated rounded-2xl text-lg top-8 shadow-none shadow-lg ring-transparent  group relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2',
    }"/>

    <template #right>
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu title="Navigation" overlay="false" :items="items" orientation="vertical" class="-mx-2.5" ui:{}/>
    </template>
  </UHeader>
</template>

<style scoped>
.logo {
  height: 2.5rem;
}

.header {

}

.scrolled .agape-logo {
  height: 2rem;
  width: 2rem;
}

@keyframes slide_down {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide_up {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateY(100%);
  }
}
</style>
