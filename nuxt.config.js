// Configuration: https://content.nuxtjs.org/integrations#nuxtjssitemap
const createSitemapRoutes = async () => {
  let routes = []
  let posts = null
  const { $content } = require('@nuxt/content')
  if (posts === null || posts.length === 0)
    posts = await $content({ deep: true }).only(['slug']).fetch()
    posts.map(file => file.path === '/index' ? '/' : file.path)
  for (const post of posts) {
    routes.push(`${post.slug}`)
  }
  return routes
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'doc',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/master.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/fontawesome'
  ],

  // Tailwindcss build: 
  tailwindcss: {
    jit: true,
    // add '~tailwind.config` alias
    exposeConfig: true
  },

  fontawesome: {
    component: 'fa',
    icons: {
      brands: ['faFacebook', 'faInstagram'],
      solid: [
        'faArrowRight', 'faArrowLeft', 'faNewspaper', 'faMedal', 'faAddressBook',
        'faChalkboard', 'faBars', 'faTimes', 'faMoon', 'faSun', 'faClipboard', 'faClipboardCheck'
      ]
      // regular: ['faMoon','faSun']
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',

    '@nuxtjs/sitemap' // always push in the end of array
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-vsc-dark-plus.css'
      }
    }
    // dir: '@/content/*.md'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  },

  // Build Configuration: https://color-mode.nuxtjs.org/#configuration
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    // classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },

  // Build configuration: https://content.nuxtjs.org/integrations#nuxtjssitemap
  sitemap: {
    hostname: 'http://localhost:3000/',
    gzip: true,
    routes: createSitemapRoutes
  }

}
