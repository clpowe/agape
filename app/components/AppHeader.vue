<script setup>
import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";
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

const services = [
    {
        label: "Law School Preparation Services",
        href: "/services/law-school-prep",
    },
    { label: "Bar Prep Academy", href: "/services/bar-prep-academy" },
    {
        label: "Law School Partnerships",
        href: "/services/law-school-partnerships",
    },
    { label: "First Time Takers", href: "/services/first-time-takers" },
    { label: "MBE Only Takers", href: "/services/mbe-only-takers" },
    { label: "Repeat Takers", href: "/services/repeat-takers" },
];

const openIndex = ref(null);
const navRef = useTemplateRef("navRef");
const mobileMenuRef = useTemplateRef("mobileMenuRef");

const { activate, deactivate } = useFocusTrap(mobileMenuRef);

function toggle(index) {
    openIndex.value = openIndex.value === index ? null : index;
}

function onKeydown(e) {
    if (e.key === "Escape") {
        openIndex.value = null;
    }
}

function onButtonKeydown(e, idx) {
    const topButtons = Array.from(navRef.value.querySelectorAll(".main-link"));
    const current = topButtons.indexOf(e.target);
    if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
        e.preventDefault();
        const max = topButtons.length;
        let next = 0;
        if (e.key === "ArrowRight") next = (current + 1) % max;
        if (e.key === "ArrowLeft") next = (current - 1 + max) % max;
        if (e.key === "Home") next = 0;
        if (e.key === "End") next = max - 1;
        topButtons[next].focus();
    }
    if ((e.key === "Enter" || e.key === " ") && idx != null) {
        e.preventDefault();
        toggle(idx);
    }
}

useEventListener(navRef, "focusout", (e) => {
    if (!navRef.value.contains(e.relatedTarget)) {
        openIndex.value = null;
    }
});

function toggleMobileMenu() {
    mobileMenuRef.value.showModal();
    activate();
}

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
                <button ref="hamburger" class="hamburger" aria-haspopup="true" aria-controls="mobile-menu"
                    @click="toggleMobileMenu">
                    <span class="sr-only">Menu</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
                        <path d="M3 6h18M3 12h18M3 18ah18" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" />
                    </svg>
                </button>

                <!-- Native Popover -->
                <dialog id="mobile-menu" ref="mobileMenuRef" popover popover-backdrop>
                    <button aria-label=" Close menu" @click="closeMobileMenu">✕</button>
                    <ul class="">
                        <li v-for="(item, i) in items" :key="i">
                            <template v-if="item.submenu">
                                <button type="button" class="main-link" :aria-expanded="openIndex === i"
                                    :aria-controls="`submenu-${i}`" @click="toggle(i)"
                                    @keydown="onButtonKeydown($event, i)">
                                    {{ item.label }}
                                </button>
                                <ul v-show="openIndex === i" :id="`submenu-${i}`" class="" role="menu">
                                    <li v-for="(svc, j) in services" :key="j">
                                        <NuxtLink role="menuitem" :to="svc.href">{{
                                            svc.label
                                        }}</NuxtLink>
                                    </li>
                                </ul>
                            </template>
                            <template v-else>
                                <NuxtLink class="main-link" :to="item.href" @keydown="onButtonKeydown($event, null)">
                                    {{ item.label }}</NuxtLink>
                            </template>
                        </li>
                    </ul>
                </dialog>

                <NavigationMenuRoot ref="navRef" v-model="currentTrigger" class="NavigationMenuRoot">
                    <!-- Desktop Disclosure Navigation -->
                    <NavigationMenuList class="NavigationMenuList">
                        <NavigationMenuItem v-for="(item, i) in items" :key="i">
                            <template v-if="item.children">
                                <NavigationMenuTrigger class="main-link">
                                    {{ item.label }}
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
    margin: var(--space-xs);
}

.NavigationMenuRoot {
    position: relative;
    z-index: 1;
}

.site_header {
    background-color: var(--background-primary);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-inline: var(--space-xs);
    padding-block: var(--space-xs);
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
    margin-top: var(--space-xs);
    width: 100%;
    background-color: var(--background-primary);
    border-radius: 6px;
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

.hamburger {
    display: block;
    margin-inline-start: auto;
}



[popover] {
    display: none;
    position: fixed;
    inset: 0;
}

[popover][open] {
    display: block;
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
