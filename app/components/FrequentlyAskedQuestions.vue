<script setup lang="ts">
const { data } = useAsyncData("faq-questions", () =>
  queryCollection("frequently_asked_questions").all()
);
</script>

<template>
  <h2>Frequently Asked Questions</h2>
  <AccordionRoot
    v-if="data"
    class="AccordionRoot"
    type="single"
    :collapsible="true"
  >
    <template v-for="item in data" :key="item.id">
      <AccordionItem class="AccordionItem" :value="item.question">
        <AccordionHeader>
          <AccordionTrigger class="AccordionTrigger">
            {{ item.question }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent class="AccordionContent">
          {{ item.answer }}
        </AccordionContent>
      </AccordionItem>
    </template>
  </AccordionRoot>
</template>

<style scoped>
.AccordionItem {
  overflow: hidden;
  margin-top: 1px;
}
.AccordionContent {
  overflow: hidden;
  font-size: 15px;
  color: var(--mauve-11);
  background-color: var(--mauve-2);
}
.AccordionContent[data-state="open"] {
  animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
}
.AccordionContent[data-state="closed"] {
  animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--reka-accordion-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--reka-accordion-content-height);
  }
  to {
    height: 0;
  }
}
</style>
