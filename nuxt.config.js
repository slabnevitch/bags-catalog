export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/bags-catalog/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bags-catalog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'swiper/dist/css/swiper.css'
  ],

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || '/bags-catalog/' //для префиксов путей картинок из папки static при сборке для gh-pages
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@plugins/v-mask.js',
    '@plugins/vuelidate.js',
    { src: '~/plugins/vuejs-paginate.js', ssr: false },
    { src: '~/plugins/nuxt-swiper-plugin.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/style-resources"],

  styleResources: {
    scss: ["./assets/scss/main.scss"]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
