// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss', 
    'nuxt-quasar-ui',
  ],
  css: [
    '@/assets/app.css',
  ],
  quasar: {
      plugins: [
          'BottomSheet',
          'Dialog',
          'Loading',
          'LoadingBar',
          'Notify',
          'Dark',
      ],
      extras: {
          font: 'roboto-font',
          fontIcons: [  
              'material-icons'
          ],
      },
  },
  resolve: {
    '@assets': '~/assets',
  },
})
