<script setup lang="ts">
import { Icon } from '#components';
import AppTypography from '../AppTypography.vue';

const { course } = defineProps({
    course: {
        type: Object,
    },
});

console.log(course?.value);
</script>
<template>
    <section class="section">
        <div class="flex flex-wrap">
            <AppTypography tag="h2" variant="heading-l" class="font-bold text-default">
                {{ course?.title }}
            </AppTypography>
            <div class="course_details">
                <div class="description">
                    <AppTypography tag="p" variant="text-m">
                        {{ course?.description }}
                    </AppTypography>
                </div>
                <div class="stats flex gap-2 flex-wrap">
                    <div class="course_time">
                        <Icon name="lucide:alarm-clock" size="1.5rem" alt="" class="icon" />
                        <AppTypography tag="p" variant="text-s" class="text-muted">
                            {{ course?.duration }}
                        </AppTypography>
                    </div>
                    <div class="course_cost ">
                        <Icon name="lucide:badge-dollar-sign" size="1.5rem" class="icon" />
                        <AppTypography tag="p" variant="text-s" class="text-muted">
                            {{ course?.price }}
                        </AppTypography>
                    </div>
                </div>
                <div>


                </div>
            </div>
        </div>
        <div class="structure flex flex-col">
            <div class="title">
                <AppTypography tag="h3" variant="heading-m" class="font-bold text-default">
                    Course Structure
                </AppTypography>
            </div>
            <div class="list">
                <div v-for="lesson in course?.course_structure" :key="lesson.title" class="lesson">
                    <Icon :name="`lucide:${lesson.icon}`" size="2rem" class="icon" />
                    <div>
                        <AppTypography tag="h4" variant="text-l" :is-bold="true" :is-strong="true">
                            {{ lesson.title }}
                        </AppTypography>
                        <AppTypography tag="p" variant="text-s" class="text-muted">
                            {{ lesson.description }}
                        </AppTypography>
                    </div>

                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
.course_details {
    display: flex;
    flex-direction: column;
    gap: var(--space-m);

    .stats {
        display: flex;
        gap: var(--space-sm);
        flex-wrap: wrap;
    }
}

.course_time,
.course_cost {
    display: flex;
    gap: var(--space-xxs);
    align-items: center;

    background-color: var(--background-terciary);
    padding: var(--space-xs);
    border-radius: var(--border-radius-1);

    .icon {
        fill: var(--color-brand-500);
        color: var(--color-brand-500);
    }
}

.list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 17rem), 1fr));
    gap: var(--space-sm);


    .lesson {
        .icon {
            margin-bottom: var(--space-l);
        }

        display: flex;
        flex-direction: column;
        padding: var(--space-sm);
        gap: var(--space-xxs);
        grid-template-rows: subgrid;

        background-color: var(--background-terciary);
        border-radius: var(--border-radius-1);
    }
}
</style>