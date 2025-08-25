<template>
  <section aria-lable="Path to Esquire" class="bg-inverted text-inverted">
    <UContainer class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:grid py-16 sm:py-24 lg:py-32 gap-8 sm:gap-16">
          <div class="wrapper">
            <div class="title flex flex-col">
              <h2 class="text-inverted text-3xl sm:text-4xl lg:text-5xl tracking-tight font-bold text-highlighted text-start max-w-[560px] text-balance">The Agape Path to Esquire</h2>
            </div>
            <div class="steps">
              <ul>
                <li v-for="index in 3" :key="index">
                  <div class="step-item">
                    <div class="step-number">
                      0{{ index }}.
                    </div>
                    <div class="step-content">
                      <h3 class="step-title text-2xl font-sans font-semibold mb-2">Title</h3>
                      <p>Students interested in our tutoring or writing programs must complete an application. Our team reviews each submission and develops a personalized success plan tailored to your needs.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="action">
                <UButton class="mt-auto w-fit">Book your first lesson</UButton>
            </div>
          </div>
    </UContainer>
  </section>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-areas: 
    "title"
    "steps"
    "action";

  @media (min-width: 768px) {
    grid-template-areas: 
      "title action"
      "steps steps";
  }

  @media (min-width: 975px) {
    grid-template-areas: 
      "title steps"
      "action steps";
  }
}

.title {
  grid-area: title;
  max-width: 52ch;

  @media (min-width: 768px) {
    max-width: 40ch;
  }

  @media (min-width: 975px) {
    max-width: 52ch;
  }
}

.steps {
  grid-area: steps;
}

.action {
  grid-area: action;
  margin-top: auto;

  @media (min-width: 768px) {
    place-self: end;
  }

  @media (min-width: 975px) {
    place-self: start;
  }
}

.step-item {
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid var(--border-color-muted);
}

.step-number {
  color: var(--ui-primary);
  font-weight: 900;
  font-size: 4rem;
  line-height: 1;
}

.step-title{
  font-size:2rem;
  font-weight: 600;

}
</style>
