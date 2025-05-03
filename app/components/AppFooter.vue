<script setup lang="ts">
  const columns = [
    {
      label: 'Resources',
      children: [
        {
          label: 'About'
        },
        {
          label: 'Docs'
        },
        {
          label: 'Roadmap'
        },
        {
          label: 'Changelog'
        }
      ]
    },
    {
      label: 'Features',
      children: [
        {
          label: 'Affiliates'
        },
        {
          label: 'Portal'
        },
        {
          label: 'Jobs'
        },
        {
          label: 'Sponsors'
        }
      ]
    },
    {
      label: 'Company',
      children: [
        {
          label: 'About'
        },
        {
          label: 'Pricing'
        },
        {
          label: 'Careers'
        },
        {
          label: 'Blog'
        }
      ]
    }
  ];

  const toast = useToast();

  const email = ref('');
  const loading = ref(false);

  function onSubmit() {
    loading.value = true;

    toast.add({
      title: 'Subscribed!',
      description: "You've been subscribed to our newsletter."
    });
  }
</script>

<template>
  <USeparator
    :avatar="{
      src: 'https://embeds.serp.co/serp-arrow.svg'
    }"
    class="h-px"
  />

  <UFooter :ui="{ top: 'border-b border-default' }">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="columns">
          <template #right>
            <form @submit.prevent="onSubmit">
              <UFormField
                name="email"
                label="Subscribe to our newsletter"
                size="lg"
              >
                <UInput
                  v-model="email"
                  type="email"
                  class="w-full"
                  placeholder="Enter your email"
                >
                  <template #trailing>
                    <UButton type="submit" size="xs" label="Subscribe" />
                  </template>
                </UInput>
              </UFormField>
            </form>
          </template>
        </UFooterColumns>
      </UContainer>
    </template>

    <template #left>
      <p class="text-muted text-sm">
        Copyright © <NuxtLink to="https://serp.co">SERP</NuxtLink>
        {{ new Date().getFullYear() }}. All rights reserved.
      </p>
    </template>

    <template #right>
      <UButton
        to="https://serp.ly/@devinschumacher/youtube"
        target="_blank"
        icon="i-simple-icons-youtube"
        aria-label="Youtube"
        color="neutral"
        variant="ghost"
      />
      <UButton
        to="https://www.linkedin.com/company/serpcompany"
        target="_blank"
        icon="i-simple-icons-linkedin"
        aria-label="X"
        color="neutral"
        variant="ghost"
      />
      <UButton
        to="https://github.com/serp-ai"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
