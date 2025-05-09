<!-- components/PageHero.vue -->
<script setup>
  const pageData = inject('pageData');
  const videoId = computed(() => pageData.value?.videoId || 'GTaOBy7mxF0');
</script>

<template>
  <div class="bg-white py-24">
    <UPageHero
      :title="$slots.title ? undefined : pageData?.value?.title"
      :description="
        $slots.description ? undefined : pageData?.value?.description
      "
      orientation="vertical"
      class="mx-auto max-w-6xl"
      :ui="{
        wrapper: 'py-8',
        container: 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8',
        title:
          'sm:text-7xl md:text-8xl text-pretty tracking-tight font-black text-black text-center',
        description:
          'text-lg sm:text-xl/8 text-balance max-w-3xl mx-auto text-center mt-6 mb-16'
      }"
    >
      <template #title v-if="$slots.title">
        <slot name="title" />
      </template>

      <template #description v-if="$slots.description">
        <slot name="description" />
      </template>

      <div class="mt-8 flex justify-center">
        <SScriptYouTubePlayer
          :video-id="videoId"
          above-the-fold
          class="mx-auto w-full max-w-3xl"
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
  </div>
</template>
