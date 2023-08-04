<template>
    <div class="my-5">
        <div class="flex flex-row justify-between mb-3">
            <div class="flex items-center">
                <q-img src="/imgs/poker.png" class="w-4 h-4 mr-2"/>
                <p class="text-white text-lg font-bold">Stake Original</p>            
            </div>
            <div>
              <q-btn @click="swiperRef.slidePrev()" flat class="border-gray-300 border-[2px] border-solid rounded-tl-full rounded-bl-full mr-1" size="sm"><q-icon size="xs" color="white" name="arrow_back"/></q-btn>
              <q-btn @click="swiperRef.slideNext()" flat class="border-gray-300 border-[2px] border-solid rounded-tr-full rounded-br-full" size="sm"><q-icon size="xs" color="white" name="arrow_forward"/></q-btn>
            </div>
        </div>
        <Swiper
        :slides-per-view="3.1"
        :space-between="10"
        @swiper="onSwiper"
        :breakpoints="{
          '450': {
            slidesPerView: 4.1,
            spaceBetween: 10,
          },
          '650': {
            slidesPerView: 5.1,
            spaceBetween: 10,
          },
          '800': {
            slidesPerView: 6.2,
            spaceBetween: 10,
          },
          '1100': {
            slidesPerView: 6.2,
            spaceBetween: 10,
          },
          '1400': {
            slidesPerView: 7.2,
            spaceBetween: 10,
          },
        }"
      >
        <swiper-slide v-for="i in ['1','1','1','1','1','1','1','1','1','1','1','1','1']">
            <CasinoGameItem />
        </swiper-slide>
    </Swiper>
    </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/swiper-bundle.css";

let swiperRef: any;
const onSwiper = (swiper: any) => {
  swiperRef = swiper;
};
</script>