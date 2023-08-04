<template>
    <div class="bg-[#213743]">
        <div class="w-[90%] mx-auto py-6">
            <p class="text-white text-2xl font-bold p-6">{{ upperString(groupcollection) }} : {{ upperString(tab) }}</p>
        </div>
    </div>
    <div class="w-[90%] mx-auto py-5">
        <SearchBar />
        <div class="flex items-center justify-between my-5">
            <p @click="router.push('/casino/collection/provider')" class="rounded-full px-5 py-2 text-white text-lg font-bold cursor-pointer bg-[#0F212E] hover:bg-[#071824]">View All Providers</p>
            <div class="flex items-center">
                <q-icon name="tune" color="white" size="sm"/>
                <p class="text-white text-md font-bold mr-3 ml-1">Sort By</p>
                <q-btn-dropdown
                    outline
                    class="btn-none  bg-transparent"
                    color="white"
                >
                    <template v-slot:label>
                        <p class="text-xs pl-1 text-white">{{ selectedSort }}</p>
                    </template>

                    <q-list class="bg-[#2F4553]">
                        <q-item
                            v-for="sort in sorts"
                            clickable
                            v-close-popup
                            @click="selectSort(sort)"
                        >
                            <q-item-section>
                                <q-item-label>
                                    <p class="text-xs p-0 text-white">{{ sort }}</p>
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-btn-dropdown>
            </div>
        </div>
        <div class="grid grid-cols-8 gap-3 my-5">
            <CasinoGameItem v-for="i in ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']"/> 
        </div>
        <div class="flex flex-col justify-center items-center py-2 my-5">
            <q-linear-progress class="w-52" rounded  stripe size="5px" :value="0.947" />
            <p class="text-center text-white text-md py-2">Displaying 15 of 142</p>
            <q-btn 
                class="w-52 bg-[#2D4454]" 
                text-color="white" 
                color="#2D4454" 
                label="Load More"
            />
        </div>
        <ProviderSwiper />
        <History />
        <Description />
    </div>
</template>
<script setup lang="ts">
import { ref , onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { upperString } from '~~/utils/string';

const router = useRouter();
const route = useRoute();
const groupcollection = ref('')
const tab = ref('');
const selectedSort = ref('A-Z');
const sorts = ['A-Z','Z-A','Popular','Featured'];

onBeforeMount(()=>{
    groupcollection.value = route.params.groupcollection.toString();
    tab.value = route.params.tab.toString();
})

const selectSort = (sort:string) => {
    selectedSort.value = sort;
}
</script>