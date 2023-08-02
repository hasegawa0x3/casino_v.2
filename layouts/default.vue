<template>
    <q-layout view="lHh LpR fFf">
        <!-- Header -->
        <HeaderComponent />
        <!-- SideBar -->
        <SideBarComponent />
        
        <!-- Container -->
        <q-page-container style="background-color: #1A2C38;">
                <NuxtPage />
                <!-- <PageFooter/> 
                <MobilePageFooter />
                <MobileFooter /> -->
                <!-- Footer -->
                <div
                    class="text-sm font-normal text-center p-3"
                    :class="'sm:pb-3 pb-[120px]'"
                    style="background-color: #151515; color: #7d8396;"
                    >Copyright 2023 New Casino All Right Reserved.
                </div>
        </q-page-container> 

        <HeaderLogIn />
        <SignUp />
        <!-- <SearchDialog />
        <AvatarDialog />
        <VerifyEmail />
        <Welcome /> -->
    </q-layout>
</template>
<script setup lang="ts">
import HeaderComponent from '~~/components/header/HeaderComponent.vue';
import SideBarComponent from '~~/components/sidebar/SidebarComponent.vue';
import SignUp from '~~/components/header/SignUp.vue';
</script>