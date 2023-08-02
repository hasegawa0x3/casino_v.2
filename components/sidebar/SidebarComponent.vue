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
            <q-btn @click="store.commit('handleTitle', 'casino')" :style="`background-image: url('/imgs/sidebar/casino-${store.state.title == 'casino' ? 'green' : 'gray'}.jpg')`" class="bg-cover text-white text-md font-bold py-1 px-3" label="casino"/>
            <q-btn @click="store.commit('handleTitle', 'sports')" :style="`background-image: url('/imgs/sidebar/sports-${store.state.title == 'sports' ? 'orange' : 'gray'}.jpg')`" class="bg-cover text-white text-md font-bold py-1 px-3" label="sports"/>
        </div>
        <div class="p-3 h-full overflow-y-auto">
            <SidebarSideCasino v-if="store.state.title == 'casino'"/>
            <SidebarSideSports v-if="store.state.title == 'sports'"/>
            <div class="mb-2 rounded-sm" style="background-color:#1A2C38">
                <button class="group focus:outline-none w-full">
                    <div class="relative flex flex-row items-center p-3 hover:bg-[#203642] rounded-sm">
                        <q-img src="/imgs/sidebar/promotion.png" class="w-5 h-5 mr-2"></q-img>
                        <p class="text-md font-bold text-white">Promotions</p>
                        <q-icon class="absolute right-3 top-3 group-focus:rotate-180 duration-300" name="expand_more" color="white" size="sm" />
                    </div>
                    <div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-40 group-focus:border-gray-700 group-focus:border-y-[2px]">
                        <div class="flex flex-row items-center pl-5 py-2 hover:bg-[#2F4553] rounded-sm">
                            <q-img src="/imgs/sidebar/promotion.png" class="w-5 h-5 mr-2"></q-img>
                            <p class="text-md font-bold text-white">promo1</p>
                        </div>
                        <div class="flex flex-row items-center pl-5 py-2 hover:bg-[#2F4553] rounded-sm">
                            <q-img src="/imgs/sidebar/promotion.png" class="w-5 h-5 mr-2"></q-img>
                            <p class="text-md font-bold text-white">promo2</p>
                        </div>
                        <div class="flex flex-row items-center pl-5 py-2 hover:bg-[#2F4553] rounded-sm">
                            <q-img src="/imgs/sidebar/promotion.png" class="w-5 h-5 mr-2"></q-img>
                            <p class="text-md font-bold text-white">promo3</p>
                        </div>
                        <div class="flex flex-row items-center pl-5 py-2 hover:bg-[#2F4553] rounded-sm">
                            <q-img src="/imgs/sidebar/promotion.png" class="w-5 h-5 mr-2"></q-img>
                            <p class="text-md font-bold text-white">View All</p>
                        </div>
                    </div>
                </button>
                <div class="flex flex-row items-center p-3 hover:bg-[#203642] rounded-sm">
                    <q-img src="/imgs/sidebar/affiliate.png" class="w-5 h-5 mr-2"></q-img>
                    <p class="text-md font-bold text-white">Affiliate</p>
                </div>
                <div class="flex flex-row items-center p-3 hover:bg-[#203642] rounded-sm">
                    <q-img src="/imgs/sidebar/vip.png" class="w-5 h-5 mr-2"></q-img>
                    <p class="text-md font-bold text-white">VIP Club</p>
                </div>
                <div class="flex flex-row items-center p-3 hover:bg-[#203642] rounded-sm">
                    <q-img src="/imgs/sidebar/blog.png" class="w-5 h-5 mr-2"></q-img>
                    <p class="text-md font-bold text-white">Blog</p>
                </div>
                <div class="flex flex-row items-center p-3 hover:bg-[#203642] rounded-sm">
                    <q-img src="/imgs/sidebar/forum.png" class="w-5 h-5 mr-2"></q-img>
                    <p class="text-md font-bold text-white">Forum</p>
                </div>
            </div>
            <div class="mb-2 rounded-sm" style="background-color:#1A2C38">
                <button class="group focus:outline-none w-full">
                    <div class="relative flex flex-row items-center p-3 hover:bg-[#203642] rounded-sm">
                        <q-img src="/imgs/sidebar/shake.png" class="w-5 h-5 mr-2"></q-img>
                        <p class="text-md font-bold text-white">SponsorShips</p>
                        <q-icon class="absolute right-3 group-focus:rotate-180 duration-300" name="expand_more" color="white" size="sm" />
                    </div>
                    <div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-52 group-focus:border-gray-700 group-focus:border-y-[2px]">
                        <div class="flex flex-row items-center pl-5 py-2 hover:bg-[#2F4553] rounded-sm">
                            <q-img src="/imgs/sidebar/shake.png" class="w-5 h-5 mr-2"></q-img> 
                            <p class="text-md font-bold text-white">sponsor1</p>
                        </div>
                        <div class="flex flex-row items-center pl-5 py-2 hover:bg-[#2F4553] rounded-sm">
                            <q-img src="/imgs/sidebar/shake.png" class="w-5 h-5 mr-2"></q-img> 
                            <p class="text-md font-bold text-white">sponsor1</p>
                        </div>
                        <div class="flex flex-row items-center pl-5 py-2 hover:bg-[#2F4553] rounded-sm">
                            <q-img src="/imgs/sidebar/shake.png" class="w-5 h-5 mr-2"></q-img> 
                            <p class="text-md font-bold text-white">sponsor1</p>
                        </div>
                        <div class="flex flex-row items-center pl-5 py-2 hover:bg-[#2F4553] rounded-sm">
                            <q-img src="/imgs/sidebar/shake.png" class="w-5 h-5 mr-2"></q-img> 
                            <p class="text-md font-bold text-white">sponsor1</p>
                        </div>
                        <div class="flex flex-row items-center pl-5 py-2 hover:bg-[#2F4553] rounded-sm">
                            <q-img src="/imgs/sidebar/shake.png" class="w-5 h-5 mr-2"></q-img> 
                            <p class="text-md font-bold text-white">sponsor1</p>
                        </div>
                    </div>
                </button>
                <div class="flex flex-row items-center p-3 hover:bg-[#203642] rounded-sm">
                    <q-img src="/imgs/sidebar/safe.png" class="w-5 h-5 mr-2"></q-img>
                    <p class="text-md font-bold text-white">Casino Safe</p>
                </div>
                <div class="flex flex-row items-center p-3 hover:bg-[#203642] rounded-sm">
                    <q-img src="/imgs/sidebar/support.png" class="w-5 h-5 mr-2"></q-img>
                    <p class="text-md font-bold text-white">Live Supprot</p>
                </div>
                <button class="group focus:outline-none w-full">
                    <div class="relative flex flex-row items-center p-3 hover:bg-[#203642] rounded-sm">
                        <q-img src="/imgs/sidebar/language.png" class="w-5 h-5 mr-2"></q-img>
                        <p class="text-md font-bold text-white">Language: English</p>
                        <q-icon class="absolute right-3 group-focus:rotate-180 duration-300" name="expand_more" color="white" size="sm" />
                    </div>
                    <div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-52 group-focus:border-gray-700 group-focus:border-y-[2px]">
                        <div class="flex flex-row items-center pl-5 py-2 hover:bg-[#2F4553] rounded-sm">
                            <q-img src="/imgs/sidebar/language.png" class="w-5 h-5 mr-2"></q-img>
                            <p class="text-md font-bold text-white">lang1</p>
                        </div>
                        <div class="flex flex-row items-center pl-5 py-2 hover:bg-[#2F4553] rounded-sm">
                            <q-img src="/imgs/sidebar/language.png" class="w-5 h-5 mr-2"></q-img>
                            <p class="text-md font-bold text-white">lang1</p>
                        </div>
                        <div class="flex flex-row items-center pl-5 py-2 hover:bg-[#2F4553] rounded-sm">
                            <q-img src="/imgs/sidebar/language.png" class="w-5 h-5 mr-2"></q-img>
                            <p class="text-md font-bold text-white">lang1</p>
                        </div>
                        <div class="flex flex-row items-center pl-5 py-2 hover:bg-[#2F4553] rounded-sm">
                            <q-img src="/imgs/sidebar/language.png" class="w-5 h-5 mr-2"></q-img>
                            <p class="text-md font-bold text-white">lang1</p>
                        </div>
                        <div class="flex flex-row items-center pl-5 py-2 hover:bg-[#2F4553] rounded-sm">
                            <q-img src="/imgs/sidebar/language.png" class="w-5 h-5 mr-2"></q-img>
                            <p class="text-md font-bold text-white">lang1</p>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    </q-drawer>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import {useStore} from 'vuex';
const store = useStore();
const model = ref(true);
</script>