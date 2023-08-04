import { createStore } from 'vuex';
const store = createStore({
    state() {
        return {
            isDrawer: false,
            onLogin: false,
            onSignup: false,
            title: '',


            notification: {},           // notification(type,message)

        };
    },
    mutations: {
        handleDrawer(state, payload) {state.isDrawer = payload; },        
        handleLogin(state, payload) {state.onLogin = payload; },        
        handleSignup(state, payload) {state.onSignup = payload; },        
        handleTitle(state, payload) {state.title = payload; },        
        handleNotification(state, payload) { state.notification = payload; },
    
    },
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
    // Install the store instance as a plugin
});
