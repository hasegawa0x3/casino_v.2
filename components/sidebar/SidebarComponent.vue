<template>
    <q-drawer
        v-model="model"
        show-if-above
        :width="250"
        elevated
        :breakpoint="1064"
        class="relative overflow-y-hidden"
        style="background-color: #0F212E"
    >
        <div elevated class="sticky w-full my-4 px-2 flex flex-row items-center justify-around shadow-[#0C1A25] shadow-2xl" style="background-color: #0F212E">
            <q-icon name="menu" size="md" color="white"/>
            <q-btn @click="()=>{store.commit('handleTitle', 'casino'); router.push('/casino');}" :style="`background-image: url('/imgs/sidebar/casino-${store.state.title == 'casino' ? 'green' : 'gray'}.jpg')`" class="bg-cover text-white text-md font-bold py-1 px-3" label="casino"/>
            <q-btn @click="()=>{store.commit('handleTitle', 'sports'); router.push('/sports');}" :style="`background-image: url('/imgs/sidebar/sports-${store.state.title == 'sports' ? 'orange' : 'gray'}.jpg')`" class="bg-cover text-white text-md font-bold py-1 px-3" label="sports"/>
        </div>
        <div class="p-3 h-full overflow-y-auto">
            <SidebarSideCasino v-if="store.state.title == 'casino'"/>
            <SidebarSideSports v-if="store.state.title == 'sports'"/>
            <SidebarSideDefault />
        </div>
    </q-drawer>
</template>
<script setup lang="ts">
import { ref , onBeforeMount } from "vue";
import { useRouter , useRoute } from 'vue-router';
import {useStore} from 'vuex';

const router = useRouter();
const route = useRoute();
const store = useStore();
const model = ref(true);

onBeforeMount(()=>{
    if(route.path.includes('casino')) store.commit('handleTitle', 'casino');
    else if(route.path.includes('sports')) store.commit('handleTitle', 'sports');
    else store.commit('handleTitle', '');
});
</script>