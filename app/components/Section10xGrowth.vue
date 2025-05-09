<!-- components/Section10xGrowth.vue -->
<script setup>
  const pageData = inject('pageData');
  const cards = computed(() => pageData.value?.socialProofCards || []);
</script>

<template>
  <div class="bg-gray-50 dark:bg-gray-800 py-24">
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <h2
        class="max-w-4xl text-center font-black tracking-tight text-pretty text-black dark:text-white sm:text-6xl md:text-7xl"
      >
        10X GROWTH WITH
        <u class="underline decoration-2 decoration-black dark:decoration-white">FREE TRAFFIC</u> FROM
        SEARCH ENGINES
      </h2>
      <p class="mx-auto mt-8 max-w-3xl text-center text-xl leading-relaxed text-gray-700 dark:text-gray-200">
        Why do our clients consistently see 2x, 5x, 10x (and even 70x) growth
        faster & more consistently than anyone else on the internet?
        <br /><br />
        Because we have a proven system that works every time, and it's
        guaranteed. For us SEO isn't guesswork – it's an equation.
        <br /><br />
        And if you're serious about growing your business, you should get
        serious about knowing the solution to growing PREDICTABLY.
      </p>
    </div>

    <!-- social proof -->
    <UContainer class="mt-16">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <UCard
          v-for="card in cards"
          :key="card.id"
          class="border-0 p-8 shadow-sm"
          :ui="{
            base: 'bg-white dark:bg-gray-700 rounded-xl',
            body: { base: 'flex flex-col h-full' }
          }"
        >
          <h3 class="mb-2 text-lg font-semibold text-gray-600 dark:text-gray-300">
            {{ card.title }}
          </h3>
          <div class="mb-4 w-12 border-b-2 border-blue-500"></div>
          <p class="mb-3 text-5xl font-bold text-black dark:text-white">{{ card.value }}</p>
          <p class="text-sm text-gray-700 dark:text-gray-400">{{ card.description }}</p>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>
