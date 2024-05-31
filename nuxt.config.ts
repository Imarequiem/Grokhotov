// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
           link: [{ rel: 'icon', type: 'image/png', href: "/img/logo.png" }]
        }
   },
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  modules: [
    '@pinia/nuxt',
    'nuxt-swiper'
  ]
})
