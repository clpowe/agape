<script setup lang="ts">
const { data: items } = useNavigationItems();
</script>

<template>
  <UFooter>
    <template #top>
      <UFooterColumns :links="items">
        <template #right>
          <div class="flex flex-col gap-4">
            <AppTypography tag="h3" variant="heading-xxs">Contact</AppTypography>
            <address>
              P.O. Box 26586, Jacksonville, Florida 32226<br >
              <a href="mailto:agapechristianbarprep@gmail.com">agapechristianbarprep@gmail.com</a>
              <br >
              <a href="tel:904-2340-2853">904-2340-2853</a>
            </address>
          </div>
        </template>
      </UFooterColumns>
    </template>

    <template #bottom>
      <p>&copy; {{ new Date().getFullYear() }} Agape Christian Bar Prep</p>
    </template>
  </UFooter>
</template>