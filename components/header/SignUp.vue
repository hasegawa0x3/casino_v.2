<template>
    <q-dialog v-model="store.state.onSignup" style="background-color: #1a2c3870" persistent>
        <q-card style="background-color: #1a2c38" class="w-[500px]">
            <q-card-section>
                <div class="relative">
                    <p class="text-2xl font-bold text-white text-center">Create An Account</p>
                    <q-icon @click="store.commit('handleSignup', false)" name="close" size="sm" color="white" class="absolute right-0 top-1"/>
                </div>
            </q-card-section>

            <q-card-section class="q-pt-none px-7">
                <div class="">
                    <div class="flex justify-between">
                        <p class="text-gray-300 text-md">Email Address <span class="text-red">*</span></p>
                        <p class="text-red text-xs py-1">Invalid Email Address</p>
                    </div>
                    <q-input
                        v-model="signup.username.value"
                        dark
                        dense
                        outlined
                        class="pb-3"
                    />
                </div>
                <div class="">
                    <div class="flex justify-between">
                        <p class="text-gray-300 text-md">UserName <span class="text-red">*</span></p>
                        <p class="text-red text-xs py-1">Invalid UserName</p>
                    </div>
                    <q-input
                        v-model="signup.email.value"
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
                        v-model="signup.password.value"
                        :type="visibility ? 'text' : 'password'"
                        dark
                        dense
                        outlined
                        class="pb-3"
                    ><q-icon @click="setVisibility" :name="visibility ? 'visibility_off' : 'visibility'" size="sm" class=" text-gray-400 hover:text-white my-auto"></q-icon></q-input>
                </div>
                <div class="">
                    <div class="flex justify-between">
                        <p class="text-gray-300 text-md">Password Conformation <span class="text-red">*</span></p>
                        <p class="text-red text-xs py-1">Password Doesn't Match</p>
                    </div>
                    <q-input
                        v-model="signup.passwordConform.value"
                        :type="visibility ? 'text' : 'password'"
                        dark
                        dense
                        outlined
                        class="pb-3"
                    ><q-icon @click="setVisibility" :name="visibility ? 'visibility_off' : 'visibility'" size="sm" class=" text-gray-400 hover:text-white my-auto"></q-icon></q-input>
                </div>
                <q-btn @click="Signup" color="primary" label="Sign In" class="w-full text-lg my-3"/>
                <p @click="()=>{store.commit('handleLogin', true); store.commit('handleSignup', false);}" class="text-center text-sm text-gray-300 hover:text-white cursor-pointer">Already have an Account? Sign In!</p>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import {useStore} from "vuex";
import {SignUp} from '~~/actions/auth'

const store = useStore();
const visibility = ref(false);
let signup = {
    username: ref(''),
    email: ref(''),
    password: ref(''),
    passwordConform: ref(''),
}
const setVisibility = () => {
    visibility.value = !visibility.value;
}
const Signup = () => {
    let userdata = {};
    Object.keys(signup).map(item => {
        userdata = {...userdata, [item] : signup[item].value};
    });
    // userdata = {...userdata, 'visitorId':store.state.visitorId, 'click_id': Cookies.get('click_id'), 'promo': Cookies.get('promo')};
    SignUp(userdata, store);
}
</script>