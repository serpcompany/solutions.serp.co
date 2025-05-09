<!-- app/pages/growth.vue -->
<script setup lang="ts">
  const route = useRoute();

  // Define types for content
  interface PageContent {
    title: string;
    description?: string;
    videoId?: string;
    socialProofCards?: SocialProofCard[];
  }

  // Define types for social proof cards
  interface SocialProofCard {
    id: number;
    title: string;
    value: string;
    description: string;
  }

  // Use queryContent instead of queryCollection
  const { data: page } = await useAsyncData<PageContent>(route.path, () => {
    return queryContent('/growth').findOne() as Promise<PageContent>;
  });

  // Make page data available to components
  provide('pageData', page);

  useSeoMeta({
    title: page.value?.title || 'Growth Solutions',
    description: page.value?.description || ''
  });

  const socialProofCards = computed<SocialProofCard[]>(() => {
    return page.value?.socialProofCards || [];
  });
</script>

<template>
  <UPage>
    <!-- Hero section -->
    <UPageHero
      title="GROWTH SOLUTIONS"
      description="Growing a business is tough. We make it easier by plugging in proven growth systems right into your business that will help you get more reach, convert more traffic into leads, and convert those leads into sales."
      orientation="vertical"
      :ui="{
        title:
          'sm:text-7xl md:text-8xl text-pretty tracking-tight font-black text-highlighted',
        description: 'text-lg sm:text-xl/8 text-balance mt-4'
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

    <!-- featured in ribbon -->
    <div class="mb-24">
      <img
        src="/images/serp-featured-in-ribbon.png"
        alt="Featured in Ribbon"
        class="mx-auto px-10 py-4"
      />
    </div>

    <!-- 10x with seo -->
    <div class="bg-gray-100 py-24">
      <div class="mx-auto max-w-4xl">
        <h2
          class="max-w-4xl text-center font-black tracking-tight text-pretty text-black sm:text-7xl md:text-8xl"
        >
          10X GROWTH WITH <u>FREE TRAFFIC</u> FROM SEARCH ENGINES
        </h2>
        <p class="mt-8 max-w-3xl text-center text-lg">
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
      <UContainer class="grid grid-cols-1 gap-4 bg-gray-100 p-8 md:grid-cols-4">
        <UCard v-for="card in socialProofCards" :key="card.id" class="p-6">
          <h3 class="mb-2 text-lg font-semibold">{{ card.title }}</h3>
          <div class="mb-4 w-10 border-b-2 border-blue-500"></div>
          <p class="mb-2 text-4xl font-bold text-black">{{ card.value }}</p>
          <p class="text-sm">{{ card.description }}</p>
        </UCard>
      </UContainer>
    </div>

    <!-- featured in logo grid -->
    <div class="w-full">
      <div class="mx-auto my-24 max-w-4xl">
        <h2 class="text-center font-bold uppercase">Featured In</h2>
        <img
          src="/images/serp-featured-in-logo-grid.png"
          alt="Featured in logo grid"
          class="mx-auto px-10 py-4"
        />
      </div>
    </div>

    <!-- Fortune 500 section -->
    <div class="mx-auto max-w-3xl">
      <h2
        class="mb-6 max-w-3xl text-center font-black tracking-tight text-pretty text-black sm:text-6xl md:text-7xl"
      >
        FORTUNE 500<sup>™</sup> GROWTH SOLUTIONS - NOW ACCESSIBLE FOR BRANDS OF
        ALL SIZES.
      </h2>

      <p class="mt-8 max-w-3xl text-center text-lg">
        How different would your business be today if you had a team of the
        world's top business growth experts & digital marketers in your corner
        guiding you through every obstacle you encounter and providing clarity
        about every marketing decision you had to make? <br /><br />
        And what if there was a proven, step-by-step process that you and your
        team could simply follow to see the same kind of success that has helped
        us generate over $200M+ dollars of revenue for businesses of all shapes
        & sizes?
        <br /><br />
        The secret to success is not to reinvent but to reverse-engineer. We do
        the experimenting on our own time and bring you only the most ruthlessly
        effective growth strategies that are working today.
      </p>
    </div>

    <div class="w-full">
      <div class="mx-auto my-24 max-w-4xl">
        <h2 class="text-center font-bold uppercase">BRAND EXPERIENCE</h2>
        <img
          src="/images/serp-client-logo-grid.png"
          alt="Client logo grid"
          class="mx-auto px-10 py-4"
        />
      </div>
    </div>

    <!-- THE POWER IS IN THE PARTNERSHIP SECTION -->
    <div class="w-full bg-gray-200 py-24 sm:py-24">
      <UContainer>
        <div class="mx-auto max-w-4xl">
          <div
            class="text-md mb-4 text-center font-medium tracking-wide uppercase"
          >
            NO MORE 'PAY-AND-PRAY' MARKETING
          </div>

          <h2
            class="mb-12 text-center text-5xl font-black tracking-tight text-black sm:text-6xl md:text-7xl"
          >
            THE POWER IS IN THE PARTNERSHIP
          </h2>

          <div class="space-y-6">
            <p class="mx-auto max-w-3xl text-center text-lg">
              Most marketing campaigns fail because they focus on one aspect of
              growth: Marketing.<br /><br />

              Because truth be told: There's a lot of companies out there who
              can "run ads", "build websites", "write blogs", "get leads", and
              do just about a billion other things that can work to grow your
              business...<br /><br />

              But if you want to actually succeed in turning traffic into
              revenue (and do it profitably) marketing alone is NOT enough to
              guide your business through the issues you will soon encounter.<br /><br />

              Here's why: In business, and most things in life, when you solve
              one problem another one presents itself.<br /><br />

              When it comes to growing a business, even if you manage to "do
              some marketing" that brings new traffic into your business, it
              creates a couple more problems that most businesses aren't
              equipped to solve (because they've never had to deal with
              marketing traffic before).<br /><br />

              (Most marketing companies aren't equipped, or willing, to solve
              them either).<br /><br />

              These problems are the 'gap' between the stage where traditional
              marketing accountability ends (at the 'get traffic and leads'
              part) and the stage where a business owner actually needs to get
              for marketing to make sense (at the make an ROI stage).<br /><br />

              "Closing this gap" has been the key ingredient that's allowed us
              to generate over $200M in sales (and counting) for ourselves and
              our clients - and consistently, predictably, and profitably double
              businesses in 90 days, and 10x them in 6-12 months.<br /><br />

              We do this through our trademarked Partnership Marketing™
              approach.
            </p>
          </div>
        </div>
      </UContainer>
    </div>

    <!-- INSIDER SEO TRADE-SECRETS SECTION -->
    <div class="w-full py-16 sm:py-24">
      <UContainer>
        <div class="mb-8 flex justify-center">
          <UBadge
            color="error"
            variant="solid"
            class="px-6 py-2 text-sm font-extrabold uppercase"
          >
            BREAKING NEWS: SEO MORE ALIVE THAN EVER
          </UBadge>
        </div>

        <div class="mb-16 flex flex-col items-center">
          <h2
            class="max-w-5xl text-center text-5xl font-black tracking-tight text-black sm:text-6xl md:text-7xl"
          >
            INSIDER SEO TRADE-SECRETS THAT OPEN THE FLOODGATES TO FREE GOOGLE
            TRAFFIC
          </h2>
        </div>

        <div
          class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2"
        >
          <div class="flex justify-center">
            <img
              src="/images/seo-playbook.png"
              alt="SEO Playbook"
              width="300"
            />
          </div>

          <div class="flex flex-col space-y-6">
            <p class="text-lg">
              While everyone else is running around screaming 'SEO is dead' and
              'Google's algorithms are unpredictable' we're sitting back,
              completely relaxed, getting more free organic traffic from search
              engines faster than ever.
            </p>

            <div class="mt-4">
              <p class="text-lg">
                <strong>How?</strong> Because Google is an algorithm. And
                algorithms are math. And like any mathematical equation, when
                you have the correct formula, you get the correct answer - every
                time. We put that formula into a free report for you to download
                that reveals the most powerful SEO secrets to open the
                floodgates to organic traffic.
              </p>
            </div>

            <div class="mt-6">
              <UButton
                color="success"
                size="xl"
                to="#"
                class="px-4 py-2 font-semibold"
              >
                Get Free Report
              </UButton>
            </div>
          </div>
        </div>
      </UContainer>
    </div>
  </UPage>
</template>
