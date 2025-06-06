<script setup lang="ts">
const { data: items } = useNavigationItems();
</script>

<template>
  <footer class="">
    <div class="footer section wrapper" data-width="wide">
      <div class="flex flex-wrap">
        <nav aria-labelledby="quick-links">
          <AppTypography id="quick-links" tag="h3" variant="heading-xxs">Quick Links</AppTypography>
          <ul>
            <li v-for="item in items" :key="item.id">
              <NuxtLink :to="item.to">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <nav aria-labelledby="services-links">
          <AppTypography id="services-links" tag="h3" variant="heading-xxs">Services</AppTypography>
          <ul>
            <li v-for="item in items?.find((i) => i.label === 'services')?.children" :key="item.label">
              <NuxtLink :to="item.to">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <div>
          <AppTypography tag="h3" variant="heading-xxs">Contact</AppTypography>
          <address>
            P.O. Box 26586, Jacksonville, Florida 32226<br />
            <a href="mailto:agapechristianbarprep@gmail.com">agapechristianbarprep@gmail.com</a>
            <br />
            <a href="tel:904-2340-2853">904-2340-2853</a>
          </address>
        </div>
      </div>
      <p>&copy; {{ new Date().getFullYear() }} Agape Christian Bar Prep</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  margin-inline: var(--space-m);
  margin-bottom: var(--space-m);
}

.footer {
  background-color: var(--color-secondary-950);
  color: var(--color-secondary-50);
}
</style>