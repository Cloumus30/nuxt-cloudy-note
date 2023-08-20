// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig:{
    public:{
      API_BASE_URL: process.env.API_BASE_URL,
    }
  },
  tailwindcss: {
    cssPath: '/css/input.css',
    configPath: 'tailwind.config',
    viewer: true,
  },
  vue:{
    compilerOptions: {
      isCustomElement: (tag) => ['OtherComponents', 'Ckeditor'].includes(tag),
    },
  },
  modules:[
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ]
})
