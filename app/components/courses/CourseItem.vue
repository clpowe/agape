<script setup lang="ts">
import AppTypography from '../AppTypography.vue';

const { course } = defineProps({
    course: {
        type: Object,
    },
});

console.log(course);
</script>
<template>
    <section class="section">
        <AppTypography tag="h2" variant="heading-xxs" class="font-bold text-default">
            {{ course?.title }}
        </AppTypography>
        <div class="flex gap-2 flex-wrap">
            <AppTypography tag="p" variant="text-s" class="text-muted">
                {{ course?.duration }}
            </AppTypography>
            <AppTypography tag="p" variant="text-s" class="text-muted">
                {{ course?.meta.cost }}
            </AppTypography>
        </div>
        <div>
            <AppTypography tag="p" variant="text-s" class="text-muted">
                {{ course?.description }}
            </AppTypography>
        </div>
    </section>
</template>

<style scoped></style>