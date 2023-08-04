<template>
    <div class="relative hover:scale-105 duration-300">
        <div class="relative rounded-lg">
            <q-img src="/imgs/casino/game.png" class="relative rounded-lg z-[1]"/>
        </div>
        <div
            class="absolute opacity-0 hover:opacity-100 w-full h-full z-[2] top-0 left-0 rounded-lg bg-blue-700 bg-opacity-90 transition ease-in-out duration-300"
        >
            <div class="absolute w-full h-full flex flex-col justify-around items-center">
                <p class="text-white text-bold text-xl w-[80%]">Hilo</p>
                <q-icon color="white" name="play_arrow" size="xl" />
                <p class="text-white text-semibold text-lg text-center">Stake Original</p>
            </div>
            <div
                class="absolute top-3 right-3 p-0"
                style="background-color: transparent"
            >
                <q-icon color="white" name="favorite" size="xs" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>