<script setup lang="ts">
import { Icon } from "@iconify/vue";
import {
  DrawerRoot,
  DrawerTrigger,
  DrawerPortal,
  DrawerOverlay,
  DrawerContent,
} from "vaul-vue";
import {
  NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "reka-ui";

const { data: items } = await useAsyncData(() => {
  return queryCollection("navigation").all();
});

const isDark = useDark({
  selector: "body",
  attribute: "color-scheme",
  valueDark: "dark",
  valueLight: "light",
});

const toggleDark = useToggle(isDark);

const currentTrigger = ref("");
</script>

<template>
  <!-- Mobile Navigation -->
  <div class="md:hidden">
    <DrawerRoot :direction="'left'">
      <DrawerTrigger class="p-2">
        <Icon icon="mdi:menu" width="24" height="24" />
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay class="fixed inset-0 bg-black bg-opacity-50" />
        <DrawerContent
          class="fixed top-0 left-0 w-3/4 h-full bg-white p-4 overflow-y-auto"
        >
          <ul class="space-y-4">
            <li v-for="item in items" :key="item.id">
              <NuxtLink :to="item.to">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
          <button @click="toggleDark()">Toggle Dark</button>
        </DrawerContent>
      </DrawerPortal>
    </DrawerRoot>
  </div>

  <!-- Desktop Navigation -->
  <NavigationMenuRoot
    v-model="currentTrigger"
    class="NavigationMenuRoot hidden md:flex"
  >
    <NavigationMenuList class="NavigationMenuList">
      <template v-for="item in items" :key="item.id">
        <NavigationMenuItem>
          <NavigationMenuLink
            v-if="!item.children"
            class="NavigationMenuLink"
            as-child
          >
            <NuxtLink class="Callout" :to="item.to">
              {{ item.label }}
            </NuxtLink>
          </NavigationMenuLink>
          <NavigationMenuTrigger v-else class="NavigationMenuTrigger">
            {{ item.label }}
            <Icon icon="radix-icons:caret-down" class="CaretDown" />
          </NavigationMenuTrigger>
          <NavigationMenuContent
            v-if="item.children"
            class="NavigationMenuContent"
          >
            <ul class="List one">
              <li v-for="child in item.children" :key="child.label">
                <NavigationMenuLink as-child>
                  <NuxtLink :to="child.to">
                    <AppTypography
                      variant="text-m"
                      :is-bold="true"
                      :is-strong="true"
                      tag="p"
                    >
                      {{ child.label }}
                    </AppTypography>
                    <AppTypography variant="text-s" tag="p">
                      {{ child.description }}
                    </AppTypography>
                  </NuxtLink>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </template>
      <button @click="toggleDark()">cmode</button>
      <NavigationMenuIndicator class="NavigationMenuIndicator" />
    </NavigationMenuList>
    <div class="ViewportPosition">
      <NavigationMenuViewport class="NavigationMenuViewport" />
    </div>
  </NavigationMenuRoot>
</template>

<style>
.NavigationMenuRoot {
  display: none;
}
@media (min-width: 768px) {
  .NavigationMenuRoot {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100vw;
    z-index: 1;
  }
}

.NavigationMenuList {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  gap: var(--space-s);
}

.NavigationMenuTrigger,
.NavigationMenuLink {
  outline: none;
  user-select: none;
  line-height: 1;
}

.NavigationMenuTrigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.NavigationMenuLink {
  display: block;
  text-decoration: none;
  line-height: 1;
}

.NavigationMenuContent {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  animation-duration: 250ms;
  animation-timing-function: ease;
  background-color: var(--raised);
  padding: var(--space-s);
}
.NavigationMenuContent[data-motion="from-start"] {
  animation-name: enterFromLeft;
}
.NavigationMenuContent[data-motion="from-end"] {
  animation-name: enterFromRight;
}
.NavigationMenuContent[data-motion="to-start"] {
  animation-name: exitToLeft;
}
.NavigationMenuContent[data-motion="to-end"] {
  animation-name: exitToRight;
}
@media only screen and (min-width: 600px) {
  .NavigationMenuContent {
    width: auto;
  }
}

.NavigationMenuIndicator {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 10px;
  top: 100%;
  overflow: hidden;
  z-index: 1;
  transition:
    width,
    transform 250ms ease;
}
.NavigationMenuIndicator[data-state="visible"] {
  animation: fadeIn 200ms ease;
}
.NavigationMenuIndicator[data-state="hidden"] {
  animation: fadeOut 200ms ease;
}

.NavigationMenuViewport {
  position: relative;
  transform-origin: top center;
  width: 100%;
  background-color: white;
  overflow: hidden;
  box-shadow: var(--overlay-shadow);
  height: var(--reka-navigation-menu-viewport-height);
  transition:
    width,
    height,
    300ms ease;
}
.NavigationMenuViewport[data-state="open"] {
  animation: scaleIn 200ms ease;
}
.NavigationMenuViewport[data-state="closed"] {
  animation: scaleOut 200ms ease;
}
@media only screen and (min-width: 600px) {
  .NavigationMenuViewport {
    width: var(--reka-navigation-menu-viewport-width);
  }
}

.List {
  display: grid;
  margin: 0;
  list-style: none;
  gap: var(--space-xs);
}
@media only screen and (min-width: 600px) {
  .List.one {
    width: 625px;
    grid-template-columns: auto auto;
  }
}

.ListItemLink {
  display: block;
  outline: none;
  text-decoration: none;
  user-select: none;
  line-height: 1;
}
.ListItemLink:focus {
  box-shadow: 0 0 0 2px red;
}
.ListItemLink:hover {
  background-color: red;
}

.ListItemHeading {
  font-weight: 500;
  line-height: 1.2;
  color: var(--grass-12);
}

.ListItemText {
  color: var(--mauve-11);
  line-height: 1.4;
  font-weight: initial;
}

.ViewportPosition {
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  top: 100%;
  left: 0;
  perspective: 2000px;
}

.CaretDown {
  position: relative;
  color: var(--grass-10);
  top: 1px;
  transition: transform 250ms ease;
}
[data-state="open"] > .CaretDown {
  transform: rotate(-180deg);
}

.Arrow {
  position: relative;
  top: 70%;
  background-color: rgb(255, 255, 255);
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  border-top-left-radius: 2px;
}

@keyframes enterFromRight {
  from {
    opacity: 0;
    transform: translateX(200px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes enterFromLeft {
  from {
    opacity: 0;
    transform: translateX(-200px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes exitToRight {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(200px);
  }
}

@keyframes exitToLeft {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-200px);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: rotateX(-30deg) scale(0.9);
  }
  to {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
}

@keyframes scaleOut {
  from {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
  to {
    opacity: 0;
    transform: rotateX(-10deg) scale(0.95);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
