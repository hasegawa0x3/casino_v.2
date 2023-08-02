<template>
    <q-dialog v-model="store.state.onLogin" style="background-color: #1a2c3870" persistent>
        <q-card style="background-color: #1a2c38" class="w-[500px]">
            <q-card-section>
                <div class="relative">
                    <p class="text-2xl font-bold text-white text-center">Sign In</p>
                    <q-icon @click="store.commit('handleLogin', false)" name="close" size="sm" color="white" class="absolute right-0 top-1"/>
                </div>
            </q-card-section>

            <q-card-section class="q-pt-none px-7">
                <div class="">
                    <div class="flex justify-between">
                        <p class="text-gray-300 text-md">Email Address <span class="text-red">*</span></p>
                        <p class="text-red text-xs py-1">Invalid Email Address</p>
                    </div>
                    <q-input
                        v-model="loginInfo.email"
                        dark
                        dense
                        outlined
                        class="pb-3"
                    />
                </div>
                <div class="">
                    <div class="flex justify-between">
                        <p class="text-gray-300 text-md">Password <span class="text-red">*</span></p>
                        <p class="text-red text-xs py-1">Password Incorrect</p>
                    </div>
                    <q-input
                        v-model="loginInfo.pass"
                        :type="visibility ? 'text' : 'password'"
                        dark
                        dense
                        outlined
                        class="pb-3"
                    ><q-icon @click="setVisibility" :name="visibility ? 'visibility_off' : 'visibility'" size="sm" class=" text-gray-400 hover:text-white my-auto"></q-icon></q-input>
                </div>
                <p class="text-right text-xs text-gray-300 hover:text-white cursor-pointer">Forgot Password?</p>
                <q-btn @click="Login" color="primary" label="Sign In" class="w-full text-lg my-3"/>
                <p @click="()=>{store.commit('handleLogin', false); store.commit('handleSignup', true);}" class="text-center text-sm text-gray-300 hover:text-white cursor-pointer">Don't have an Account? Register Now!</p>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import {useStore} from "vuex";
const store = useStore();
const visibility = ref(false);
let loginInfo = {
    email: ref(''),
    pass: ref(''),
}
const setVisibility = () => {
    visibility.value = !visibility.value;
}
const Login = () => {

}
</script>