<template>
  <UContainer>
    <div class="main-grid">
      <div class="second-grid ">
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

  @media (min-width: 975px) {  
  grid-template-areas: 
    "content content img"
    "content content img";
  }
}

.second-grid {
  grid-area: content;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  grid-column: span 3;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 975px) {
    grid-template-columns: 1fr 1fr;
    grid-column: span 2;
  }

}

.image {
  grid-area: img;
  height: 100%;
  width: 100%;
  object-fit: cover;

  grid-area: img;
}
</style>
