<template>
  <UDropdownMenu
    v-slot="{ open }"
    :modal="false"
    :items="[{
      label: 'Solutions',
  to: '/solutions/',
  color: 'primary',
      checked: true,
      type: 'checkbox'
    }, {
      label: 'Growth',
      to: '/growth/',

    }, {
      label: 'Automation',
      to: '/automation/',
    }, {
      label: 'SEO',
      to: '/seo/'
    }, {
      label: 'AI Agents',
      to: '/ai-agents/'
    }]"
    :ui="{ content: 'w-(--reka-dropdown-menu-trigger-width) min-w-0' }"
    size="xs"
  >
    <UButton
      label="Solutions"
      variant="subtle"
      trailing-icon="i-lucide-chevron-down"
      size="xs"
      class="-mb-[6px] font-semibold rounded-full truncate"
      :class="[open && 'bg-primary/15']"
      :ui="{
        trailingIcon: ['transition-transform duration-200', open ? 'rotate-180' : undefined].filter(Boolean).join(' ')
      }"
    />
  </UDropdownMenu>
</template>
