// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  tailwindcss: {
    cssPath: '/css/input.css',
    configPath: 'tailwind.config',
    viewer: true,
  },
  modules:[
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ]
})
