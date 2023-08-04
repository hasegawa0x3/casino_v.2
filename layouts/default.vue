<template>
    <q-layout view="LHh Lpr fFf">
        <!-- Header -->
        <HeaderComponent />
        <!-- SideBar -->
        <SideBarComponent />
        
        <!-- Container -->
        <q-page-container style="background-color: #1A2C38;" class="overflow-x-hidden">
                <NuxtPage />
                <!-- <PageFooter/> 
                <MobilePageFooter />
                <MobileFooter /> -->
                <!-- Footer -->
                <div
                    class="text-sm font-normal text-center p-3"
                    style="background-color: #151515; color: #7d8396;"
                    >Copyright 2023 New Casino All Right Reserved.
                </div>
        </q-page-container> 

        <HeaderLogIn />
        <HeaderSignUp />
        <!-- <SearchDialog />
        <AvatarDialog />
        <VerifyEmail />
        <Welcome /> -->
    </q-layout>
</template>
<script setup lang="ts">
import HeaderComponent from '~~/components/header/HeaderComponent.vue';
import SideBarComponent from '~~/components/sidebar/SidebarComponent.vue';
import { useStore } from 'vuex';
import { useQuasar } from 'quasar'

const store = useStore();
const not = useQuasar();

watch(
    ()=>store.state.notification,
    ()=>{not.notify({
            message: store.state.notification.type,
            caption: store.state.notification.message,
            icon: store.state.notification.type == 'Success'?'done':'info',
            iconColor: store.state.notification.type == 'Success'?'green':'red',
            color: 'white',
            textColor: 'dark',
            position: 'top-right',
            progress:true,
            multiLine: true,
            timeout: 1500,}) 
});

</script>