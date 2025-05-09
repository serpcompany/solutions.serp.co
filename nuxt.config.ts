// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@nuxt/scripts'
  ],
  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  mdc: {
    highlight: {
      noApiRoute: false
    }
  },

  content: {
    // For Content Studio integration
    // Note: 'studio' configuration is handled by UI at nuxt.studio
    // Nuxt Content integration with Studio is handled separately
    // See https://nuxt.studio for more information
    documentDriven: true
  },

  // Runtime config for Nuxt Studio preview
  runtimeConfig: {
    public: {
      studioEndpoint: 'https://api.nuxt.studio',
      studioGitInfo: {
        name: 'solutions.serp.co',
        owner: 'serpcompany',
        url: 'https://github.com/serpcompany/solutions.serp.co'
      }
    }
  },

  components: {
    dirs: [
      {
        path: '~/components',
        global: true
      },
      {
        path: '~/components/content',
        global: true,
        pathPrefix: false
      }
    ]
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2025-01-15',

  nitro: {
    prerender: {
      routes: ['/']
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
});
