// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@nuxt/scripts',
    '@nuxthq/studio'
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
    // Properly configure MDC
    markdown: {
      remarkPlugins: [],
      rehypePlugins: []
    },
    // Add Preview API for Nuxt Studio
    preview: {
      api: 'https://api.nuxt.studio',
      gitInfo: {
        name: 'solutions.serp.co',
        owner: 'serpcompany',
        url: 'https://github.com/serpcompany/solutions.serp.co'
      }
    }
  },

  // Configure Nuxt Studio
  studio: {
    enabled: true,
    gitInfo: {
      name: 'solutions.serp.co',
      owner: 'serpcompany',
      url: 'https://github.com/serpcompany/solutions.serp.co'
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
