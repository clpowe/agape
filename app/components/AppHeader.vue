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

                <nav ref="navRef" aria-label="Main navigation">
                    <!-- Desktop Disclosure Navigation -->
                    <ul class="disclosure-nav desktop-nav" @keydown="onKeydown">
                        <li v-for="(item, i) in items" :key="i">
                            <template v-if="item.children">
                                <button type="button" class="main-link" :aria-expanded="openIndex === i"
                                    :aria-controls="`submenu-${i}`" @click="toggle(i)"
                                    @keydown="onButtonKeydown($event, i)">
                                    {{ item.label }}
                                </button>
                                <ul v-show="openIndex === i" :id="`submenu-${i}`" class="submenu" role="menu">
                                    <li v-for="(svc, j) in item.children" :key="j">
                                        <SubMenuItem :to="svc.to">
                                            <template #label>
                                                {{ svc.label }}
                                            </template>

                                            <template #description>
                                                {{ svc.description }}
                                            </template>
                                        </SubMenuItem>
                                    </li>
                                </ul>
                            </template>
                            <template v-else>
                                <NuxtLink class="main-link" :to="item.to" @keydown="onButtonKeydown($event, null)">
                                    {{ item.label }}</NuxtLink>
                            </template>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    </header>
</template>

<script setup>
import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";
import SubMenuItem from "./SubMenuItem.vue";

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
</script>

<style scoped>
header {
    margin: var(--space-xs);
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
}


.desktop-nav {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: var(--space-xs);

    li {
        position: static;
    }

    @media (width < 600px) {
        display: none;
    }
}

.submenu {
    position: absolute;
    background-color: var(--background-primary);
    list-style: none;
    max-width: 600px;

    padding: var(--space-sm);
    top: 150%;
    left: -140%;
    width: 90vw;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-xs);

    text-decoration: none;

    li {
        position: static;
    }

    .menuitem {
        text-decoration: none;
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--space-xs);
    }

    @media (width > 760px) {
        left: -250%;
        top: 175%;
        width: 98vw;
    }
}

a {
    text-decoration: none;
}

.hamburger {
    display: block;
    margin-inline-start: auto;
}

/* Positioning only */
.disclosure-nav>li {
    position: relative;
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
</style>
