<template>
    <nav ref="navRef" aria-label="Main navigation">
        <!-- Mobile Hamburger -->
        <button ref="hamburger" class="hamburger" aria-haspopup="true" aria-controls="mobile-menu"
            @click="toggleMobileMenu">
            <span class="sr-only">Menu</span>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
                <path d="M3 6h18M3 12h18M3 18ah18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
        </button>

        <!-- Native Popover -->
        <dialog popover id="mobile-menu" ref="mobileMenuRef" popover-backdrop ">
            <button aria-label=" Close menu" @click="closeMobileMenu">✕</button>
            <ul class="">
                <li v-for="(item, i) in items" :key="i">
                    <template v-if="item.submenu">
                        <button type="button" class="main-link" :aria-expanded="openIndex === i"
                            :aria-controls="`submenu-${i}`" @click="toggle(i)" @keydown="onButtonKeydown($event, i)">
                            {{ item.label }}
                        </button>
                        <ul :id="`submenu-${i}`" class="" role="menu" v-show="openIndex === i">
                            <li v-for="(svc, j) in services" :key="j">
                                <NuxtLink role="menuitem" :to="svc.href">{{ svc.label }}</NuxtLink>
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

        <!-- Desktop Disclosure Navigation -->
        <ul class="disclosure-nav desktop-nav" @keydown="onKeydown">
            <li v-for="(item, i) in items" :key="i">
                <template v-if="item.submenu">
                    <button type="button" class="main-link" :aria-expanded="openIndex === i"
                        :aria-controls="`submenu-${i}`" @click="toggle(i)" @keydown="onButtonKeydown($event, i)">
                        {{ item.label }}
                    </button>
                    <ul :id="`submenu-${i}`" class="disclosure-submenu" role="menu" v-show="openIndex === i">
                        <li v-for="(svc, j) in services" :key="j">
                            <NuxtLink role="menuitem" :to="svc.href">{{ svc.label }}</NuxtLink>
                        </li>
                    </ul>
                </template>
                <template v-else>
                    <a class="main-link" :href="item.href" @keydown="onButtonKeydown($event, null)">{{ item.label }}</a>
                </template>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'
import { useEventListener } from '@vueuse/core'
const route = useRoute()

watch(() => route.fullPath, () => {
    closeMobileMenu()
    openIndex.value = null
})

const items = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', submenu: true },
    { label: 'Contact', href: '/contact' },
    { label: 'Apply', href: '/apply' },
    { label: 'Careers', href: '/careers' },
    { label: 'Current Students', href: '/students' },
]

const services = [
    { label: 'Law School Preparation Services', href: '/services/law-school-prep' },
    { label: 'Bar Prep Academy', href: '/services/bar-prep-academy' },
    { label: 'Law School Partnerships', href: '/services/law-school-partnerships' },
    { label: 'First Time Takers', href: '/services/first-time-takers' },
    { label: 'MBE Only Takers', href: '/services/mbe-only-takers' },
    { label: 'Repeat Takers', href: '/services/repeat-takers' },
]

const openIndex = ref(null)
const navRef = useTemplateRef("navRef")
const mobileMenuRef = useTemplateRef('mobileMenuRef')

const { activate, deactivate } = useFocusTrap(mobileMenuRef)

function toggle(index) {
    openIndex.value = openIndex.value === index ? null : index
}

function onKeydown(e) {
    if (e.key === 'Escape') {
        openIndex.value = null
    }
}

function onButtonKeydown(e, idx) {
    const topButtons = Array.from(navRef.value.querySelectorAll('.main-link'))
    const current = topButtons.indexOf(e.target)
    if (['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(e.key)) {
        e.preventDefault()
        const max = topButtons.length
        let next = 0
        if (e.key === 'ArrowRight') next = (current + 1) % max
        if (e.key === 'ArrowLeft') next = (current - 1 + max) % max
        if (e.key === 'Home') next = 0
        if (e.key === 'End') next = max - 1
        topButtons[next].focus()
    }
    if ((e.key === 'Enter' || e.key === ' ') && idx != null) {
        e.preventDefault()
        toggle(idx)
    }
}

useEventListener(navRef, 'focusout', (e) => {
    if (!navRef.value.contains(e.relatedTarget)) {
        openIndex.value = null
    }
})

function toggleMobileMenu() {
    mobileMenuRef.value.showModal()
    activate()
}

function closeMobileMenu() {
    mobileMenuRef.value.close()
    deactivate()
}
</script>


<style scoped>
.hamburger {
    display: block;
}


.disclosure-nav {
    display: none;
    gap: 1rem;
}

/* Positioning only */
.disclosure-nav>li {
    position: relative;
}

.disclosure-submenu {
    position: absolute;
    top: 100%;
    left: 0;
}

[popover] {
    display: none;
    position: fixed;
    inset: 0;
}

[popover][open] {
    display: block;
}

@media (width > 500px) {
    .desktop-nav {
        display: flex;
    }

    .hamburger {
        display: none;
        position: relative;
    }
}
</style>
