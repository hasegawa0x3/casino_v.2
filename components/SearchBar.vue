<template>
    <div class="relative group h-fit">
        <q-input 
            v-model="searchText" 
            dense 
            flat 
            class="w-full rounded-full bg-[#0F212E] border-[1px]" 
            color="white"
            placeholder="Search your games"
            rounded 
            outlined
            dark
            ref="searchRef"
        >
            <template v-slot:prepend>
                <q-icon name="search" size="sm" class="group-hover:text-white text-gray-400 font-bold mx-1" />
            </template>
            <template v-slot:label class="text-white">
            </template>
        </q-input>
        <div class="max-h-[320px] overflow-y-scroll hidden group-focus-within:!block hover:!block w-full absolute bg-[#0F212E] mt-2 border-l-[3px] border-b-[3px] border-r-[3px] rounded-md z-[2]">
            <p class="text-center text-md font-bold text-gray-400 pt-3">Search required at least 3 characters.</p>
            <div class="grid grid-cols-6 gap-2 px-3 py-5">
                <CasinoGameItem  v-for="i in ['1','1','1','1','1','1','1','1','1']" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {ref, watch} from 'vue';

const searchText = ref('');
const searchRef = ref();
watch(()=>searchRef.value, ()=>{
    console.log(searchRef.value);
    
})
</script>