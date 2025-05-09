<!-- components/content/SectionPartnership.vue -->
<script setup>
  const pageData = inject('pageData');
</script>

<template>
  <div class="w-full bg-gray-100 dark:bg-gray-800 py-24 sm:py-32">
    <UContainer>
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div
          class="mb-6 text-center text-sm font-semibold tracking-wide text-gray-600 dark:text-gray-300 uppercase"
        >
          <slot name="tagline">NO MORE 'PAY-AND-PRAY' MARKETING</slot>
        </div>

        <h2
          class="mb-12 text-center text-5xl font-black tracking-tight text-black dark:text-white sm:text-6xl md:text-7xl"
        >
          <slot name="heading">THE POWER IS IN THE PARTNERSHIP</slot>
        </h2>

        <div class="space-y-6">
          <div
            v-if="$slots.default"
            class="mx-auto max-w-3xl space-y-4 text-xl leading-relaxed text-gray-700 dark:text-gray-200"
          >
            <slot />
          </div>
          <div
            v-else
            class="mx-auto max-w-3xl space-y-4 text-xl leading-relaxed text-gray-700 dark:text-gray-200"
          >
            <p>
              Most marketing campaigns fail because they focus on one aspect of
              growth: Marketing.
            </p>
            <p>
              Because truth be told: There's a lot of companies out there who
              can "run ads", "build websites", "write blogs", "get leads", and
              do just about a billion other things that can work to grow your
              business...
            </p>
            <p>
              But if you want to actually succeed in turning traffic into
              revenue (and do it profitably) marketing alone is NOT enough to
              guide your business through the issues you will soon encounter.
            </p>
            <p>
              Here's why: In business, and most things in life, when you solve
              one problem another one presents itself.
            </p>
            <p>
              When it comes to growing a business, even if you manage to "do
              some marketing" that brings new traffic into your business, it
              creates a couple more problems that most businesses aren't
              equipped to solve (because they've never had to deal with
              marketing traffic before).
            </p>
            <p>
              (Most marketing companies aren't equipped, or willing, to solve
              them either).
            </p>
            <p>
              These problems are the 'gap' between the stage where traditional
              marketing accountability ends (at the 'get traffic and leads'
              part) and the stage where a business owner actually needs to get
              for marketing to make sense (at the make an ROI stage).
            </p>
            <p>
              "Closing this gap" has been the key ingredient that's allowed us
              to generate over $200M in sales (and counting) for ourselves and
              our clients - and consistently, predictably, and profitably double
              businesses in 90 days, and 10x them in 6-12 months.
            </p>
            <p>
              We do this through our trademarked Partnership Marketing™
              approach.
            </p>
          </div>
        </div>
      </div>
    </UContainer>

    <div class="mt-12 flex justify-center">
      <UButton
        label="Learn About Partnership Marketing"
        variant="solid"
        color="error"
        size="xl"
        class="px-8 py-4 font-bold text-white"
      />
    </div>
  </div>
</template>
