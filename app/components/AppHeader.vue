<script setup lang="ts">
  const nuxtApp = useNuxtApp();
  const { activeHeadings, updateHeadings } = useScrollspy();

  const items = computed(() => [
    {
      label: 'Products',
      to: '#products'
    },
    {
      label: 'Solutions',
      to: '#solutions'
    },
    {
      label: 'For Agencies',
      to: '#agencies'
    },
    {
      label: 'Resources',
      to: '#resources'
    },
    {
      label: 'Pricing',
      to: '#pricing'
    }
  ]);

  nuxtApp.hooks.hookOnce('page:finish', () => {
    updateHeadings(
      [
        document.querySelector('#products'),
        document.querySelector('#solutions'),
        document.querySelector('#agencies'),
        document.querySelector('#resources'),
        document.querySelector('#pricing')
      ].filter(Boolean) as Element[]
    );
  });
</script>

<template>
  <UHeader :ui="{ root: 'bg-white dark:bg-gray-950 py-4', container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' }">
    <template #left>
      <NuxtLink to="/">
        <LogoPro class="h-8 w-auto shrink-0" />
      </NuxtLink>

      <TemplateMenu class="ml-8" />
    </template>

    <template #right>
      <UNavigationMenu
        :items="items"
        variant="link"
        class="hidden lg:flex mr-6"
        :ui="{ item: { active: 'font-semibold', base: 'font-medium text-base mx-3' } }"
      />

      <UButton
        label="Get Started"
        variant="solid"
        color="primary"
        class="hidden lg:block"
        size="lg"
      />

      <UColorModeButton class="ml-4" />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      <UButton class="mt-4" label="Get Started" variant="solid" color="primary" block />
    </template>
  </UHeader>
</template>
