<template>
  <ClientOnly>
    <img
      :src="`/logos/serp-wordmark-${colorMode.value === 'dark' ? 'light' : 'dark'}.svg`"
      alt="SERP"
      class="h-[30px] object-contain"
    />
  </ClientOnly>
</template>

<script setup>
  const colorMode = useColorMode();
</script>
