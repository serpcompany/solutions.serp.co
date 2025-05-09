<template>
  <div>
    <AppHeader />

    <main>
      <ContentDoc :path="'/growth'" v-slot="{ doc }">
        <PageHero :title="doc.title" :description="doc.description" />

        <FeaturedRibbon />

        <Section10xGrowth />

        <FeaturedLogos />

        <SectionFortune500 />

        <SectionPartnership
          tagline="NO MORE 'PAY-AND-PRAY' MARKETING"
          heading="THE POWER IS IN THE PARTNERSHIP"
        />

        <SectionSeoSecrets
          badge="BREAKING NEWS: SEO MORE ALIVE THAN EVER"
          heading="INSIDER SEO TRADE-SECRETS THAT OPEN THE FLOODGATES TO FREE GOOGLE TRAFFIC"
        />
      </ContentDoc>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'default'
  });
</script>
