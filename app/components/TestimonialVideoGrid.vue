<script setup lang="ts">
  import { ref } from 'vue';

  defineProps<{
    videos: {
      personName: string;
      businessName: string;
      businessWebsite: string;
      positionAtCompany: string;
      videoId: string;
    }[];
  }>();

  const isLoaded = ref(false);
  const video = ref();

  function stateChange(event: { data: number }) {
    const isPlaying = event.data === 1;
    // You can handle the state change here
  }
</script>

<template>
  <UPageSection class="py-8">
    <h2
      id="success-stories"
      class="mb-4 text-center text-2xl font-bold text-gray-900 dark:text-white"
    >
      Success Stories
    </h2>
    <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(video, index) in videos"
        :key="index"
        class="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800"
      >
        <div class="relative aspect-video w-full overflow-hidden">
          <SScriptYouTubePlayer
            v-if="video.videoId"
            ref="video"
            @ready="isLoaded = true"
            @state-change="stateChange"
            :video-id="video.videoId"
            :player-vars="{
              autoplay: 0,
              playsinline: 1,
              modestbranding: 1
            }"
            :width="640"
            thumbnail-size="maxresdefault"
            :height="360"
            class="absolute h-full w-full object-cover"
            :player-options="{ host: 'https://www.youtube.com' }"
          />
        </div>

        <div class="flex flex-1 flex-col p-4">
          <div class="mt-auto">
            <h3 class="text-sm font-extrabold text-gray-900 dark:text-white">
              {{ video.businessName }}
            </h3>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              {{ video.personName }}, {{ video.positionAtCompany }}
              <LazyNuxtLink
                :href="video.businessWebsite"
                target="_blank"
                rel="noopener noreferrer nofollow"
                class="text-blue-600 hover:underline dark:text-blue-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </UPageSection>
</template>
