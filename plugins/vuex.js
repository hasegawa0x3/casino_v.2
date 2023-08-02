import { createStore } from 'vuex';
const store = createStore({
    state() {
        return {
            isDrawer: false,
            onLogin: false,
            onSignup: false,
            title: '',
        };
    },
    mutations: {
        handleDrawer(state, payload) {state.isDrawer = payload; },        
        handleLogin(state, payload) {state.onLogin = payload; },        
        handleSignup(state, payload) {state.onSignup = payload; },        
        handleTitle(state, payload) {state.title = payload; },        
    },
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
    // Install the store instance as a plugin
});
