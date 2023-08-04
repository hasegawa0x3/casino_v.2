<template>
    <div class="mb-2 rounded-sm" style="background-color:#1A2C38">
        <div @click="router.push('/casino/group/favorites')" class="relative flex flex-row items-center p-3 hover:bg-[#203642] rounded-sm cursor-pointer">
            <q-img src="/imgs/sidebar/promotion.png" class="w-5 h-5 mr-2"></q-img>
            <p class="text-md font-bold text-white">Favorites</p>
        </div>
        <div @click="router.push('/casino/group/recent')" class="flex flex-row items-center p-3 hover:bg-[#203642] rounded-sm cursor-pointer">
            <q-img src="/imgs/sidebar/affiliate.png" class="w-5 h-5 mr-2"></q-img>
            <p class="text-md font-bold text-white">Recent</p>
        </div>
        <div @click="router.push('/casino/group/challenges')" class="flex flex-row items-center p-3 hover:bg-[#203642] rounded-sm cursor-pointer">
            <q-img src="/imgs/sidebar/vip.png" class="w-5 h-5 mr-2"></q-img>
            <p class="text-md font-bold text-white">Challenges</p>
        </div>
    </div>
    <div class="mb-2 rounded-sm" style="background-color:#1A2C38">
        <div class="relative flex flex-row items-center p-3 border-gray-700 border-b-[2px]">
            <p class="text-md font-bold text-white">Games</p>
        </div>
        <div @click="router.push('/casino/group/stake-originals')" class="relative flex flex-row items-center p-3 hover:bg-[#203642] rounded-sm cursor-pointer">
            <q-img src="/imgs/sidebar/promotion.png" class="w-5 h-5 mr-2"></q-img>
            <p class="text-md font-bold text-white">Stake Originals</p>
        </div>
        <div @click="router.push('/casino/group/stake-exclusives')" class="flex flex-row items-center p-3 hover:bg-[#203642] rounded-sm cursor-pointer">
            <q-img src="/imgs/sidebar/affiliate.png" class="w-5 h-5 mr-2"></q-img>
            <p class="text-md font-bold text-white">Stake Exclusives</p>
        </div>
        <div @click="router.push('/casino/group/slots')" class="flex flex-row items-center p-3 hover:bg-[#203642] rounded-sm cursor-pointer">
            <q-img src="/imgs/sidebar/vip.png" class="w-5 h-5 mr-2"></q-img>
            <p class="text-md font-bold text-white">Slots</p>
        </div>
        <div @click="router.push('/casino/group/live-casino')" class="flex flex-row items-center p-3 hover:bg-[#203642] rounded-sm cursor-pointer">
            <q-img src="/imgs/sidebar/vip.png" class="w-5 h-5 mr-2"></q-img>
            <p class="text-md font-bold text-white">Live Casino</p>
        </div>
        <div @click="router.push('/casino/group/game-shows')" class="flex flex-row items-center p-3 hover:bg-[#203642] rounded-sm cursor-pointer">
            <q-img src="/imgs/sidebar/vip.png" class="w-5 h-5 mr-2"></q-img>
            <p class="text-md font-bold text-white">Game Shows</p>
        </div>
        <div @click="router.push('/casino/group/new-release')" class="flex flex-row items-center p-3 hover:bg-[#203642] rounded-sm cursor-pointer">
            <q-img src="/imgs/sidebar/vip.png" class="w-5 h-5 mr-2"></q-img>
            <p class="text-md font-bold text-white">New Releases</p>
        </div>
        <div @click="router.push('/casino/group/feature-buy-in')" class="flex flex-row items-center p-3 hover:bg-[#203642] rounded-sm cursor-pointer">
            <q-img src="/imgs/sidebar/vip.png" class="w-5 h-5 mr-2"></q-img>
            <p class="text-md font-bold text-white">Feature Buy-In</p>
        </div>
        <div @click="router.push('/casino/group/enhanced-rtp')" class="flex flex-row items-center p-3 hover:bg-[#203642] rounded-sm cursor-pointer">
            <q-img src="/imgs/sidebar/vip.png" class="w-5 h-5 mr-2"></q-img>
            <p class="text-md font-bold text-white">Enhanced RTP</p>
        </div>
        <div @click="router.push('/casino/group/table-games')" class="flex flex-row items-center p-3 hover:bg-[#203642] rounded-sm cursor-pointer">
            <q-img src="/imgs/sidebar/vip.png" class="w-5 h-5 mr-2"></q-img>
            <p class="text-md font-bold text-white">Table Games</p>
        </div>
        <div @click="router.push('/casino/group/black-jack')" class="flex flex-row items-center p-3 hover:bg-[#203642] rounded-sm cursor-pointer">
            <q-img src="/imgs/sidebar/vip.png" class="w-5 h-5 mr-2"></q-img>
            <p class="text-md font-bold text-white">Balck Jack</p>
        </div>
        <div @click="router.push('/casino/group/baccarat')" class="flex flex-row items-center p-3 hover:bg-[#203642] rounded-sm cursor-pointer">
            <q-img src="/imgs/sidebar/vip.png" class="w-5 h-5 mr-2"></q-img>
            <p class="text-md font-bold text-white">Baccarat</p>
        </div>
        <div @click="router.push('/casino/group/roulette')" class="flex flex-row items-center p-3 hover:bg-[#203642] rounded-sm cursor-pointer">
            <q-img src="/imgs/sidebar/vip.png" class="w-5 h-5 mr-2"></q-img>
            <p class="text-md font-bold text-white">Roulette</p>
        </div>
    </div>
    <div class="mb-2 rounded-sm" style="background-color:#1A2C38">
        <div @click="router.push('/casino/collection/provider')" class="relative flex flex-row items-center p-3 hover:bg-[#203642] rounded-sm cursor-pointer">
            <q-img src="/imgs/sidebar/promotion.png" class="w-5 h-5 mr-2"></q-img>
            <p class="text-md font-bold text-white">Providers</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref , onBeforeMount } from "vue";
import { useRouter , useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
</script>