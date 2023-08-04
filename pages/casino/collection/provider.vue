<template>
    <div class="bg-[#213743]">
        <div class="w-[90%] mx-auto py-6">
            <p class="text-white text-2xl font-bold p-6">Providers</p>
        </div>
    </div>
    <div class="w-[90%] mx-auto py-5">
        <div class="grid grid-cols-7 gap-x-5 gap-y-10 my-5">
            <div @click="router.push('/casino/collection/evolution')" class="rounded-lg hover:-translate-y-1 duration-300 cursor-pointer" v-for="i in ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']">
                <q-img src="/imgs/casino/provider-evolution.png" class="rounded-md "/>
            </div>
        </div>
        <History />
        <Description />
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>