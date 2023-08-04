<template>
  <div class="relative group my-5">
    <Swiper
        :slides-per-view="1"
        :space-between="10"
        @swiper="onSwiper"
        :breakpoints="{
          '650': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '1067': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '1400': {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }"
      >
        <swiper-slide class="" v-for="i in ['1','1','1','1','1','1','1','1']">
            <div class="rounded-lg relative">
                <q-img src="/imgs/casino/promotion-slide.png" class="rounded-md z[1]"/>
                <div class="z-[2] absolute top-0 left-0 w-3/5 p-5">
                    <p class="bg-white rounded-sm text-xs font-semibold w-fit py-0 px-2">Promotion</p>
                    <p class="text-white text-lg font-bold mt-2">The Level Up</p>
                    <p class="text-white text-xs pr-3">Win a share in $20000 every week Read More</p>
                </div>
                <div class="absolute bottom-0 left-0 w-1/2 p-5">
                    <q-btn class="p-0 w-full border-gray-200 border-[2px] text-white border-solid hover:!bg-[#0F212E]" flat label="Play Now"/>
                </div>
            </div>
        </swiper-slide>
    </Swiper>
    <div class="absolute left-0 top-0 w-full h-full flex justify-between items-center z-[2]">
        <q-icon @click="swiperRef.slidePrev()" size="md" color="white" name="keyboard_arrow_left" class="opacity-0 group-hover:opacity-100 duration-300 -translate-x-full p-0 cursor-pointer"/>
        <q-icon @click="swiperRef.slideNext()" size="md" color="white" name="keyboard_arrow_right" class="opacity-0 group-hover:opacity-100 duration-300 translate-x-full p-0 cursor-pointer"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/swiper-bundle.css";


let swiperRef: any;
const onSwiper = (swiper: any) => {
  swiperRef = swiper;
};
const onSlideChange = () => {};
</script>