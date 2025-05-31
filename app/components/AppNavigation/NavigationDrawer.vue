<template>
    <DialogRoot>
        <DialogTrigger class="trigger">
            <Icon icon="lucide:menu" />
        </DialogTrigger>
        <DialogPortal>
            <AnimatePresence>
                <DialogOverlay as-child class="DialogOverlay">
                    <Motion :initial="{ opacity: 0, scale: 0 }" :animate="{ opacity: 1, scale: 1 }"
                        :exit="{ opacity: 0, scale: 0.6 }" />
                </DialogOverlay>
                <DialogContent as-child class="DialogContent">
                    <Motion :initial="{ opacity: 0, transform: ' rotateY(-180deg) ' }"
                        :animate="{ opacity: 1, transform: 'scale(1) rotateY(0deg) ' }"
                        :exit="{ opacity: 0, transform: 'scale(0.9)', top: 80 }" :transition="transition">
                        <DialogTitle class="DialogTitle">
                            Edit profile
                        </DialogTitle>
                        <ul>
                            <li v-for="item in items" :key="item.id">
                                <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
                            </li>
                        </ul>
                        <DialogClose class="IconButton" aria-label="Close">
                            <Icon icon="lucide:x" />
                        </DialogClose>
                    </Motion>
                </DialogContent>
            </AnimatePresence>
        </DialogPortal>
    </DialogRoot>
</template>

<script setup lang="ts">
import { AnimatePresence, Motion } from 'motion-v'
import { Icon } from '@iconify/vue'
import {
    DialogClose,
    DialogContent,
    DialogOverlay,
    DialogPortal,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from 'reka-ui'
const { data: items } = useNuxtData("navigation-items")

const transition = {
    duration: 0.15,
    ease: [0.16, 0.01, .3, 1],
}

</script>

<style scoped>
.trigger {
    display: block;

    @media(width > 700px) {
        display: none;
    }

}

.DialogOverlay {
    background-color: var(--black-a9);
    position: fixed;
    inset: 0;
    animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.DialogContent {
    background-color: var(--background-primary);
    border-radius: var(--border-radius-3);
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    position: fixed;
    top: 6rem;
    left: 5%;
    margin-inline: auto;
    width: 90vw;
    max-height: 85vh;
    padding: 25px;
    animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

:deep(.DialogContent:focus) {
    outline: none;
}

.DialogTitle {
    margin: 0;
    font-weight: 500;
    color: var(--mauve-12);
    font-size: 17px;
}

:deep(.DialogDescription) {
    margin: 10px 0 20px;
    color: var(--mauve-11);
    font-size: 15px;
    line-height: 1.5;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>