<template>
    <q-header class="h-[70px]" style="background-color: #1A2C38" elevated>
        <QToolbar class="max-w-[90%] p-0 mx-auto flex flex-row justify-between items-center">
                <q-img @click="store.commit('handleTitle', '')" src="/imgs/logo.png" class="h-[70px] w-[200px] cursor-pointer"/>
                <div>
                    <q-btn @click="store.commit('handleLogin', true)" no-caps flat label="Sign In" class=" font-bold mr-3"></q-btn>
                    <q-btn @click="store.commit('handleSignup', true)" no-caps label="Register" class="font-bold" color="primary"></q-btn>
                </div>
        </QToolbar>
    </q-header>
</template>
<script setup lang="ts">
import {useStore} from "vuex";
const store = useStore();
</script>