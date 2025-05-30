<script setup>
import { Icon } from '@iconify/vue'
import {
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuRoot,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from 'reka-ui'
import NavigationItem from "./AppNavigation/NavigationItem.vue";
import NavigationDrawer from './AppNavigation/NavigationDrawer.vue';

const route = useRoute();


const { data: items } = await useAsyncData("navigation-items", () => {
    return queryCollection("navigation").all();
});

watch(
    () => route.fullPath,
    () => {
        closeMobileMenu();
        openIndex.value = null;
    }
);



const openIndex = ref(null);
const navRef = useTemplateRef("navRef");
const mobileMenuRef = useTemplateRef("mobileMenuRef");





useEventListener(navRef, "focusout", (e) => {
    if (!navRef.value.contains(e.relatedTarget)) {
        openIndex.value = null;
    }
});



function closeMobileMenu() {
    mobileMenuRef.value.close();
    deactivate();
}

const currentTrigger = ref('')
</script>

<template>
    <header>
        <div class="wrapper" data-width="wide">
            <div class="site_header">
                <NuxtLink class="logo" to="/">
                    <AppLogo class="agape-logo" />
                    <AppTypography tag="p" variant="heading-xxs" is-bold="true">
                        Agape Christian
                    </AppTypography>
                </NuxtLink>
                <!-- Mobile Hamburger -->
                <NavigationDrawer />

                <NavigationMenuRoot ref="navRef" v-model="currentTrigger" class="NavigationMenuRoot">
                    <!-- Desktop Disclosure Navigation -->
                    <NavigationMenuList class="NavigationMenuList">
                        <NavigationMenuItem v-for="(item, i) in items" :key="i">
                            <template v-if="item.children">
                                <NavigationMenuTrigger class="main-link">
                                    <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
                                    <Icon icon="radix-icons:caret-down" class="CaretDown" />
                                </NavigationMenuTrigger>
                                <NavigationMenuContent class="NavigationMenuContent">
                                    <ul class="List one">
                                        <NavigationItem v-for="(svc, j) in item.children" :key="j" :title="svc.label"
                                            :to="svc.to">
                                            {{ svc.description }}
                                        </NavigationItem>
                                    </ul>
                                </NavigationMenuContent>
                            </template>
                            <template v-else>
                                <NavigationMenuItem>
                                    <NavigationMenuLink as-child>
                                        <NuxtLink class="main-link" :to="item.to">
                                            {{ item.label }}</NuxtLink>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </template>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                    <div class="ViewportPosition">
                        <NavigationMenuViewport class="NavigationMenuViewport" />
                    </div>
                </NavigationMenuRoot>
            </div>

        </div>
    </header>
</template>



<style scoped>
header {
    margin-block: var(--space-sm);
}

button,
p {
    all: unset;
}

.NavigationMenuRoot {
    position: relative;
    z-index: 1;

    @media (width < 600px) {
        display: none;
    }
}

.site_header {
    background-color: var(--background-primary);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-inline: var(--space-sm);
    padding-block: var(--space-sm);
    border-radius: var(--border-radius-3);
}

.logo {
    display: flex;
    place-content: center;
    align-items: center;
    gap: var(--space-xs);
    text-decoration: none;

    svg {
        width: 2.5rem;
        fill: var(--color-secondary-950);
    }

    a {
        text-decoration: none;
        color: var(--color-secondary-950)
    }
}


:deep(.NavigationMenuList) {
    display: flex;
    list-style: none;
    align-items: center;
    margin: 0;
    padding: 0;
    gap: var(--space-xs);

    a {
        text-decoration: none;
    }
}

:deep(.main-link),
.NavigationMenuLink {
    border: none;
    display: inline-flex;
    background-color: transparent;
    padding: var(--space-xs) var(--space-xs);
    outline: none;
    user-select: none;
    font-weight: 500;
    text-transform: capitalize;
    line-height: 1;
    border-radius: var(--border-radius-1);
}

:deep(.main-link:focus),
.NavigationMenuLink:focus {
    box-shadow: 0 0 0 2px var(--stroke-strong);
}

:deep(.main-link:hover),
.NavigationMenuLink:hover {
    background-color: var(--background-secondary);
}

:deep(.main-link) {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 2px;
}

:deep(.NavigationMenuContent) {
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    animation-duration: 250ms;
    animation-timing-function: ease;

    &[data-motion='from-start'] {
        animation-name: enterFromLeft;
    }

    &[data-motion='from-end'] {
        animation-name: enterFromRight;
    }

    &[data-motion='to-start'] {
        animation-name: exitToLeft;
    }

    &[data-motion='to-end'] {
        animation-name: exitToRight;
    }

    @media only screen and (min-width: 600px) {
        width: auto;
    }
}

.List {
    display: grid;
    padding: var(--space-sm);
    margin: 0;
    border-radius: var(--border-radius-3);
    gap: var(--space-xs);
    list-style: none;
}

@media only screen and (min-width: 600px) {
    .List.one {
        width: 500px;
        grid-template-columns: 1fr 1fr;
    }

    .List.two {
        width: 600px;
        grid-template-columns: 1fr 1fr;
    }
}

:deep(.NavigationMenuViewport) {
    position: relative;
    transform-origin: top center;
    margin-top: var(--space-sm);
    width: 100%;
    background-color: var(--background-primary);
    border-radius: var(--border-radius-3);
    overflow: hidden;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    height: var(--reka-navigation-menu-viewport-height);
    transition: width, height, 300ms ease;
}

.NavigationMenuViewport[data-state='open'] {
    animation: scaleIn 200ms ease;
}

.NavigationMenuViewport[data-state='closed'] {
    animation: scaleOut 200ms ease;
}

@media only screen and (min-width: 600px) {
    .NavigationMenuViewport {
        width: var(--reka-navigation-menu-viewport-width);
    }
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
    top: 1px;
    transition: transform 250ms ease;
}

[data-state='open']>.CaretDown {
    transform: rotate(-180deg);
}


.hamburger {
    display: block;
    margin-inline-start: auto;
}

/* [popover] {
    display: none;
    position: fixed;
    inset: 0;
}

[popover][open] {
    display: block;
} */

:deep(.DrawerContent) {
    background-color: white;
    border-radius: 6px;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    max-width: 450px;
    max-height: 85vh;
    padding: 25px;
    animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

:deep(.DialogOverlay) {
    background-color: var(--black-a9);
    position: fixed;
    inset: 0;
    animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}


@media (width >=600px) {
    .hamburger {
        display: none;
        position: relative;
    }
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
</style>
