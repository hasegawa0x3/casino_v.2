<template>
    <div class="my-5">
        <div class="flex flex-row justify-between mb-3">
            <div class="flex items-center">
                <q-img src="/imgs/poker.png" class="w-5 h-5 mr-2"/>
                <p class="text-white text-xl font-bold">Providers</p>            
            </div>
            <div>
              <q-btn @click="swiperRef.slidePrev()" flat class="border-gray-300 border-[2px] border-solid rounded-tl-full rounded-bl-full mr-1" size="sm"><q-icon size="xs" color="white" name="arrow_back"/></q-btn>
              <q-btn @click="swiperRef.slideNext()" flat class="border-gray-300 border-[2px] border-solid rounded-tr-full rounded-br-full" size="sm"><q-icon size="xs" color="white" name="arrow_forward"/></q-btn>
            </div>
        </div>
        <Swiper
        :slides-per-view="2.1"
        :space-between="10"
        @swiper="onSwiper"
        :breakpoints="{
          '400': {
            slidesPerView: 3.1,
            spaceBetween: 10,
          },
          '600': {
            slidesPerView: 4.1,
            spaceBetween: 10,
          },
          '800': {
            slidesPerView: 5.2,
            spaceBetween: 10,
          },
          '1100': {
            slidesPerView: 6.2,
            spaceBetween: 10,
          },
          '1250': {
            slidesPerView: 7.2,
            spaceBetween: 10,
          },
          '1400': {
            slidesPerView: 8.2,
            spaceBetween: 10,
          },
        }"
      >
        <swiper-slide class="py-2" v-for="i in ['1','1','1','1','1','1','1','1','1','1','1','1','1']">
            <div @click="router.push('/casino/collection/evolution')" class="rounded-lg relative hover:scale-110 duration-300 cursor-pointer">
                <q-img src="/imgs/casino/provider-evolution.png" class="rounded-md "/>
            </div>
        </swiper-slide>
    </Swiper>
    </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import {useRouter} from "vue-router";
import "swiper/swiper-bundle.css";

const router = useRouter();

let swiperRef: any;
const onSwiper = (swiper: any) => {
  swiperRef = swiper;
};
</script>