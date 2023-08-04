<template>
    <div class="my-5">
        <div class="flex justify-between items-center">
            <div class="rounded-full py-2 flex no-wrap my-5 px-1 w-fit overflow-x-auto bg-[#0F212E]">
                <div class="flex no-wrap rounded-full mx-1 py-2 px-4 flex w-fit cursor-pointer bg-[#2F4553] hover:bg-[#2F4553]">
                    <p class="max-w-fit text-white text-md text-bold">My Bets</p>
                </div>
                <div class="flex no-wrap rounded-full mx-1 py-2 px-4 flex w-fit cursor-pointer hover:bg-[#2F4553]">
                    <p class="max-w-fit text-white text-md text-bold">All Bets</p>
                </div>
                <div class="flex no-wrap rounded-full mx-1 py-2 px-4 flex w-fit cursor-pointer hover:bg-[#2F4553]">
                    <p class="max-w-fit text-white text-md text-bold">High Rollers</p>
                </div>
                <div class="flex no-wrap rounded-full mx-1 py-2 px-4 flex w-fit cursor-pointer hover:bg-[#2F4553]">
                    <p class="max-w-fit text-white text-md text-bold">Race Leaderboard</p>
                </div>
            </div>
            <q-btn-dropdown
                outline
                class="btn-none  bg-transparent"
                color="white"
            >
                <template v-slot:label>
                    <p class="text-xs pl-1 text-white">{{ selectedOption }}</p>
                </template>

                <q-list class="bg-[#2F4553]">
                    <q-item
                        v-for="option in options"
                        clickable
                        v-close-popup
                        @click="selectOption(option)"
                    >
                        <q-item-section>
                            <q-item-label>
                                <p class="text-xs pl-1 text-white">{{ option }}</p>
                            </q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-btn-dropdown>
        </div>
        <q-table 
            :loading="false"
            :rows="rows" 
            :columns="cols"
            class="bg-transparent text-white"
            striped
            dark
            no-pagination="true"
            :bordered="false"
          >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="game" :props="props">
                <div class="flex items-center">
                  <q-img src="/imgs/sidebar/promotion.png" class="w-4 h-4 mr-1"/>
                  <p class="text-[14px] font-bold">{{ props.row.game }}</p>
                </div>
              </q-td>
              <q-td key="user" :props="props">
                <p class="">{{ props.row.user }}</p>
              </q-td>
              <q-td key="time" :props="props">
                <p class="">{{ props.row.time }}</p>
              </q-td>
              <q-td key="betAmount" :props="props">
                <div class="flex items-center justify-end">
                  <p class="">{{ props.row.betAmount }}</p>
                  <q-img src="/imgs/payment/dollar.png" class="w-4 h-4 ml-1"/>
                </div>
              </q-td>
              <q-td key="multiplier" :props="props">
                <p class="">{{ props.row.multiplier }}x</p>
              </q-td>
              <q-td key="payout" :props="props">
                <div class="flex justify-end items-center">
                  <p class="">{{ props.row.payout }}</p>
                  <q-img src="/imgs/payment/dollar.png" class="w-4 h-4 ml-1"/>
                </div>
              </q-td>
            </q-tr>
          </template>
          <template v-slot:bottom>
          </template>
        </q-table>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const perPage = ref(10);
const options=[10,20,30];
const selectedOption = ref(10);
const selectOption = (option:number) => {
    selectedOption.value=option;
};
interface columnformat{
    name: string;
    label: string;
    field: string | ((row: any) => any);
    required?: boolean | undefined;
    align?: "left" | "center" | "right" | undefined;
};
const cols: columnformat[] = [
  {
      name: 'game',
      align: 'left',
      label: 'Game',
      field: 'game',
  },
  {
      name: 'user',
      label: 'User',
      align: 'center',
      field: 'user',
  },
  {
      name: 'time',
      align: 'center',
      label: 'Time',
      field: 'time',
  },
  {
      name: 'betAmount',
      align: 'right',
      label: 'Bet Amount',
      field: 'betAmount',
  },
  {
      name: 'multiplier',
      align: 'right',
      label: 'Multiplier',
      field: 'multiplier',
  },
  {
      name: 'payout',
      align: 'right',
      label: 'Payout',
      field: 'payout',
  },
];


const rows = [
  {
    game: 'Sugar Rush',
    user: 'Hidden',
    time: '2:35 AM',
    betAmount: 24.34212,
    multiplier: 4.3341,
    payout: 102.412433,
  },
  {
    game: 'Sugar Rush',
    user: 'Hidden',
    time: '2:35 AM',
    betAmount: 24.34212,
    multiplier: 4.3341,
    payout: 102.412433,
  },
  {
    game: 'Sugar Rush',
    user: 'Hidden',
    time: '2:35 AM',
    betAmount: 24.34212,
    multiplier: 4.3341,
    payout: 102.412433,
  },
  {
    game: 'Sugar Rush',
    user: 'Hidden',
    time: '2:35 AM',
    betAmount: 24.34212,
    multiplier: 4.3341,
    payout: 102.412433,
  },
  {
    game: 'Sugar Rush',
    user: 'Hidden',
    time: '2:35 AM',
    betAmount: 24.34212,
    multiplier: 4.3341,
    payout: 102.412433,
  },
  {
    game: 'Sugar Rush',
    user: 'Hidden',
    time: '2:35 AM',
    betAmount: 24.34212,
    multiplier: 4.3341,
    payout: 102.412433,
  },
  {
    game: 'Sugar Rush',
    user: 'Hidden',
    time: '2:35 AM',
    betAmount: 24.34212,
    multiplier: 4.3341,
    payout: 102.412433,
  },
  {
    game: 'Sugar Rush',
    user: 'Hidden',
    time: '2:35 AM',
    betAmount: 24.34212,
    multiplier: 4.3341,
    payout: 102.412433,
  },
  {
    game: 'Sugar Rush',
    user: 'Hidden',
    time: '2:35 AM',
    betAmount: 24.34212,
    multiplier: 4.3341,
    payout: 102.412433,
  },
  {
    game: 'Sugar Rush',
    user: 'Hidden',
    time: '2:35 AM',
    betAmount: 24.34212,
    multiplier: 4.3341,
    payout: 102.412433,
  },
  {
    game: 'Sugar Rush',
    user: 'Hidden',
    time: '2:35 AM',
    betAmount: 24.34212,
    multiplier: 4.3341,
    payout: 102.412433,
  },
  {
    game: 'Sugar Rush',
    user: 'Hidden',
    time: '2:35 AM',
    betAmount: 24.34212,
    multiplier: 4.3341,
    payout: 102.412433,
  },
];
</script>