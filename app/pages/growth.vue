<template>
  <UPage>
    <UPageHero
      title="GROWTH SOLUTIONS"
      description="Growing a business is tough. We make it easier by plugging in proven growth systems right into your business that will help you get more reach, convert more traffic into leads, and  convert those leads into sales."
      orientation="vertical"
      :ui="{
        title:
          'sm:text-7xl md:text-8xl text-pretty tracking-tight font-black text-highlighted',
        description: 'text-lg sm:text-xl/8 text-muted text-balance mt-4'
      }"
    >
      <div class="flex justify-center">
        <SScriptYouTubePlayer
          :video-id="'GTaOBy7mxF0'"
          above-the-fold
          :player-vars="{
            autoplay: 0,
            playsinline: 1,
            modestbranding: 1
          }"
          thumbnail-size="maxresdefault"
          :player-options="{ host: 'https://www.youtube.com' }"
        />
      </div>
    </UPageHero>
    <UPageMarque />
    <UContainer>
      <article>
        <!-- <ContentRenderer>first letter</ContentRenderer> -->
      </article>
    </UContainer>
  </UPage>
</template>
