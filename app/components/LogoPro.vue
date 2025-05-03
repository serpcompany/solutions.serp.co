<template>
  <NuxtImg
    :src="`https://embeds.serp.co/serp-wordmark-${colorMode.value === 'dark' ? 'light' : 'dark'}.svg`"
    alt="SERP"
    class="h-[30px] object-contain"/>
</template>

<script setup>
const colorMode = useColorMode();
</script>
