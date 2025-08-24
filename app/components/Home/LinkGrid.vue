<template>
  <UContainer>
    <div class="main-grid">
      <div class="second-grid grid gap-4 grid-cols-2 md:grid-cols-2 col-span-full">
        <slot/>
      </div>
      <NuxtImg src="/AgapeHeroImage.png" class="image min-h-52" />
    </div>
  </UContainer>
</template>

<style scoped>
.main-grid {
  display: grid;
  gap: 2rem;
  grid-template-areas: 
    "content content content"
    "img img img";

  @media (min-width: 608px) {  
  grid-template-areas: 
    "content content img"
    "content content img";
  }
}

.second-grid {
  grid-area: content;

}

.image {
  grid-area: img;
  height: 100%;
  width: 100%;

  grid-area: img;
}
</style>
