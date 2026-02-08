<script setup>
const { t, locale } = useI18n()

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/pokeball.svg' }
  ],
  htmlAttrs: {
    lang: locale
  }
})

const title = computed(() => t('app.title'))
const description = computed(() => t('app.description'))

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
</script>

<template>
  <UApp>
    <UHeader>
      <template #left>
        <NuxtLink to="/" class="flex items-center gap-2">
          <img src="/pokeball.svg" alt="PokeMMO" class="w-6 h-6">
          <span class="font-bold text-lg">{{ $t('app.brandShort') }}</span>
        </NuxtLink>
      </template>

      <template #right>
        <UButton to="/trivia/poke-type" icon="i-lucide-gamepad-2" variant="ghost" class="sm:hidden" />
        <UButton to="/trivia/poke-type" :label="$t('app.typeTrivia')" icon="i-lucide-gamepad-2" variant="ghost"
          class="hidden sm:inline-flex" />
        <LanguageSwitcher />
        <UColorModeButton />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator />

    <UFooter>
      <template #left>
        <p class="text-xs sm:text-sm text-muted">
          {{ $t('app.footerText') }} • © {{ new Date().getFullYear() }}
        </p>
      </template>
      <template #right>
        <div class="flex items-center gap-1 text-xs sm:text-sm text-muted">
          <span class="hidden sm:inline">{{ $t('app.madeBy') }}</span>
          <UButton to="https://github.com/brunowsl" target="_blank" icon="i-simple-icons-github" label="brunowsl"
            variant="ghost" size="xs" class="sm:size-sm" />
        </div>
      </template>
    </UFooter>
  </UApp>
</template>
