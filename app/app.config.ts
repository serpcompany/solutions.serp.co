export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    }
  },
  uiPro: {
    prose: {
      // Configure prose styling for content
      headings: {
        h1: 'sm:text-7xl md:text-8xl text-pretty tracking-tight font-black text-highlighted',
        h2: 'text-5xl font-black tracking-tight text-black sm:text-6xl md:text-7xl'
      },
      p: {
        base: 'text-lg sm:text-xl/8 text-balance mt-4'
      }
    }
  }
});
