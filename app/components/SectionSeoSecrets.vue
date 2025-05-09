<!-- components/content/SectionSeoSecrets.vue -->
<script setup>
  const formSubmitted = ref(false);
  const emailInput = ref('');

  const submitForm = () => {
    // Simulate form submission
    formSubmitted.value = true;
  };
</script>

<template>
  <div class="w-full bg-white dark:bg-gray-950 py-20 sm:py-28">
    <UContainer>
      <div class="mb-10 flex justify-center">
        <UBadge
          color="error"
          variant="solid"
          class="px-8 py-3 text-sm font-extrabold uppercase"
        >
          <slot name="badge">BREAKING NEWS: SEO MORE ALIVE THAN EVER</slot>
        </UBadge>
      </div>

      <div class="mb-20 flex flex-col items-center">
        <h2
          class="max-w-5xl text-center text-4xl font-black tracking-tight text-black dark:text-white sm:text-5xl md:text-6xl"
        >
          <slot name="heading"
            >INSIDER SEO TRADE-SECRETS THAT OPEN THE FLOODGATES TO FREE GOOGLE
            TRAFFIC</slot
          >
        </h2>
      </div>

      <div
        class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-4 sm:px-6 md:grid-cols-2 lg:px-8"
      >
        <div class="flex justify-center">
          <img
            src="/images/seo-playbook.png"
            alt="SEO Playbook"
            class="w-full max-w-xs transform shadow-lg transition-transform duration-300 hover:scale-105 md:max-w-sm dark:shadow-gray-800"
          />
        </div>

        <div class="flex flex-col space-y-8">
          <div class="space-y-4 text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              While everyone else is running around screaming 'SEO is dead' and
              'Google's algorithms are unpredictable' we're sitting back,
              completely relaxed, getting more free organic traffic from search
              engines faster than ever.
            </p>

            <p>
              <strong>How?</strong> Because Google is an algorithm. And
              algorithms are math. And like any mathematical equation, when you
              have the correct formula, you get the correct answer - every time.
              We put that formula into a free report for you to download that
              reveals the most powerful SEO secrets to open the floodgates to
              organic traffic.
            </p>
          </div>

          <div class="mt-8 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6">
            <h3 class="mb-4 text-xl font-bold dark:text-white">
              Download Your Free SEO Playbook
            </h3>
            <p class="mb-4 dark:text-gray-300">
              Get instant access to our proven SEO strategies that have
              generated millions in revenue.
            </p>

            <div v-if="!formSubmitted" class="space-y-4">
              <UFormGroup label="Email" name="email">
                <UInput
                  v-model="emailInput"
                  type="email"
                  placeholder="your@email.com"
                />
              </UFormGroup>
              <UButton
                color="success"
                size="xl"
                block
                @click="submitForm"
                class="py-4 font-bold text-white"
              >
                Get Free Report
              </UButton>
            </div>

            <div v-else class="py-4 text-center">
              <p class="text-success-600 dark:text-success-400 mb-2 font-semibold">
                Thanks for subscribing!
              </p>
              <p class="dark:text-gray-300">Check your email for your download link.</p>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>
