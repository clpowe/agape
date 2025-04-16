<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const { data: items } = await useAsyncData(() => {
  return queryCollection("navigation").all();
});

const currentTrigger = ref("");
</script>

<template>
  <NavigationMenuRoot v-model="currentTrigger" class="NavigationMenuRoot">
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
          <NavigationMenuTrigger
            v-else
            class="NavigationMenuTrigger"
            data-state="open"
            data-active="true"
          >
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
                      >{{ child.label }}</AppTypography
                    >
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
      <NavigationMenuIndicator
        class="absolute data-[state=hidden]:opacity-0 duration-200 data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full w-[--reka-navigation-menu-indicator-size] translate-x-[--reka-navigation-menu-indicator-position] mt-[1px] z-[100] flex h-[10px] items-end justify-center overflow-hidden transition-[all,transform_250ms_ease]"
      >
        <div
          class="relative top-[70%] h-[12px] w-[12px] rotate-[45deg] bg-white border"
        />
      </NavigationMenuIndicator>
    </NavigationMenuList>

    <div class="ViewportPosition">
      <NavigationMenuViewport class="NavigationMenuViewport" />
    </div>
  </NavigationMenuRoot>
</template>

<style>
.NavigationMenuRoot {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  z-index: 1;
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
