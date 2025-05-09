<!-- app/components/content/PageHeroNC.vue -->
<template>
  <UPageHero>
    <template #top>
      <slot name="top" />
    </template>

    <template #headline>
      <slot name="headline" />
    </template>

    <template #title>
      <slot name="title" />
    </template>

    <template #description>
      <slot name="description" />
    </template>

    <template #links>
      <slot name="links" />
    </template>

    <template #bottom>
      <slot name="bottom" />
    </template>
  </UPageHero>
</template>
