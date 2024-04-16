// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'shadcn-nuxt',
    '@pinia/nuxt',
    "@nuxt/image"
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '', 
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  colorMode: {
    classSuffix: ''
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  build: {
    transpile: ['vue-clerk', '@clerk/clerk-js'],
  },
  runtimeConfig: {
    public: {
      clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    },
    clerkSecretKey: process.env.CLERK_SECRET_KEY,
  },
})