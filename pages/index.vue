<template>
    <q-page>
        <div style="background-color:#0F212E">
            <div class="w-[90%] mx-auto flex flex-col sm:flex-row justify-around">
                <div class="w-3/4 mx-auto my-5 sm:w-1/3 flex flex-col items center sm:my-auto">
                    <p class="text-white text-3xl font-bold text-center my-3">Play Smarter</p>
                    <q-btn color="primary" no-caps class="rounded-full w-full my-3" size="xl" label="Register Now"/>
                </div>
                <q-img src="/imgs/brand.png" class="w-full sm:w-1/2"/>
            </div>
        </div>
        <div style="background-color:#1A2C38">
            <div class="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mt-3">
                <div>
                    <div class="py-3 flex items-center">
                        <q-img src="/imgs/poker.png" class="w-6 h-6 mr-2"/>
                        <p class="text-white text-bold text-lg ">Casino</p>
                    </div>
                    <q-img src="/imgs/casino.png" class="my-2 w-full rounded-md hover:-translate-y-1 duration-200"/>
                    <p class="text-white text-bold text-lg py-2">Leading Online Crypto Casino</p>
                    <p class="text-gray-400 text-md py-2">Browse our giant range of casino games as Stake offers a fair and fun online gambling experience. Play Slots, Live Casino, Blackjack, Baccarat, Roulette, and thousands of classic casino games right from your browser, including your favourite Stake Originals.</p>
                    <q-btn color="primary" no-caps class="py-3 rounded-sm w-full " size="md" label="Go to Casino"/>
                </div>
                <div>
                    <div class="py-3 flex items-center">
                        <q-img src="/imgs/basketball.png" class="w-6 h-6 mr-2"/>
                        <p class="text-white text-bold text-lg ">Sports</p>
                    </div>
                    <q-img src="/imgs/sports.png" class="my-2 w-full rounded-md hover:-translate-y-1 duration-200"/>
                    <p class="text-white text-bold text-lg py-2">Best Crypto Sports Betting Online</p>
                    <p class="text-gray-400 text-md py-2">Bet on your favourite teams, players and leagues from all around the world on our sports betting platform. Gamble on a wide range of sports betting options and markets for live sports across MMA, Basketball, Soccer and more for an unbeatable sports betting experience.</p>
                    <q-btn color="primary" no-caps class="py-3 rounded-sm w-full " size="md" label="Go to Sportsbook"/>
                </div>
            </div>
            <div class="w-[90%] mx-auto rounded-md p-5 flex justify-between items-center mt-8" style="background-color: #0F212E">
                <p class="text-white font-semibold text-lg">No Crypto? No Problem.</p>
                <div class="">
                    <q-img class="w-[52px] h-[32px] mx-1" src="/imgs/mastercard.png"/>
                    <q-img class="w-[52px] h-[32px] mx-1" src="/imgs/mastercard.png"/>
                    <q-img class="w-[52px] h-[32px] mx-1" src="/imgs/mastercard.png"/>
                    <q-img class="w-[52px] h-[32px] mx-1" src="/imgs/mastercard.png"/>
                </div>
                <q-btn class="rounded-md px-5 py-3 bg-gray-700 text-white" no-caps label="Buy Crypto" />
            </div>
            <div class=" relative w-[90%] mx-auto rounded-md p-5 m-8 bg-[#0F212E] h-[270px] overflow-y-hidden">
                <p class="text-white text-md">Bet on your favourite teams, players and leagues from all around the world on our sports betting platform. Gamble on a wide range of sports betting options and markets for live sports across MMA, Basketball, Soccer and more for an unbeatable sports betting experience.Bet on your favourite teams, players and leagues from all around the world on our sports betting platform. Gamble on a wide range of sports betting options and markets for live sports across MMA, Basketball, Soccer and more for an unbeatable sports betting experience.Bet on your favourite teams, players and leagues from all around the world on our sports betting platform. Gamble on a wide range of sports betting options and markets for live sports across MMA, Basketball, Soccer and more for an unbeatable sports betting experience.Bet on your favourite teams, players and leagues from all around the world on our sports betting platform. Gamble on a wide range of sports betting options and markets for live sports across MMA, Basketball, Soccer and more for an unbeatable sports betting experience.Bet on your favourite teams, players and leagues from all around the world on our sports betting platform. Gamble on a wide range of sports betting options and markets for live sports across MMA, Basketball, Soccer and more for an unbeatable sports betting experience.Bet on your favourite teams, players and leagues from all around the world on our sports betting platform. Gamble on a wide range of sports betting options and markets for live sports across MMA, Basketball, Soccer and more for an unbeatable sports betting experience.</p>
                <div class="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-[#0F212E] to-[#0F212E00]"></div>
                <q-btn class="absolute left-1/2 bottom-5 -translate-x-1/2 rounded-md px-5 py-2 bg-gray-700 text-white" no-caps label="Show More" />
            </div>
        </div>
    </q-page>
</template>
<script setup lang="ts">
import {useStore} from "vuex";
const store = useStore();
</script>