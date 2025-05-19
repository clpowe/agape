<script setup lang="ts">
import { register } from "swiper/element/bundle";
register();
const spaceBetween = 10;
function onProgress(e) {
	const [swiper, progress] = e.detail;
	console.log(progress);
}

function onSlideChange(e) {
	console.log("slide changed");
}

// Images or slides could come from props or state
const slides = [
	"https://pixabay.com/get/g0e9dbaccbd2037500e4c6a28b5ccf7122055b5d0b378202b859f9649cb3a6454e1014d5fec7b37c694c9d020d05d2313148ec1120a28fbfa2b5c20f7b631315b328472b03ad222ab7bd33966dea58547_640.jpg",
	"https://pixabay.com/get/g65d4f3f72fda746e072649a5ca416e9130b075e00a450b58eb29256bb797426600c96b332d4510bc18cc5c94341eba5646004fda036f4c44ecffd76912c2dcabf9bb31530d8498803cacfe470439edb3_640.jpg",
	"https://pixabay.com/get/g1072424afc6492e5aafafbf6f2e96e457ccab5b7b7c5aae90c8dcc5557282eaa83c5a65148be1e9bdf444c2e7ed0930cbf284c2317574ae423549442b9beeec771798d5885b6a687c23974ff0d02e55a_640.jpg",
];
</script>

<template>
  <ClientOnly>
    <swiper-container
      :slides-per-view="2"
      :space-between="spaceBetween"
      :loop="true"
      :pagination="{
        hideOnClick: true,
      }"
      :breakpoints="{
        768: {
          slidesPerView: 2,
        },
      }"
      @swiperprogress="onProgress"
      @swiperslidechange="onSlideChange"
    >
      <swiper-slide v-for="(src, i) in slides" :key="i" :is-active="i === 0">
        <img :src="src" alt="" class="object-cover w-full h-full" />
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>

<style scoped>
.swiper-slide-active {
  scale: 1.5;
  transition: all 0.2s ease;
}
</style>
