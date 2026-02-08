<script setup lang="ts">
const { t } = useI18n()

const guides = computed(() => [
  {
    title: t('home.guides.typeChart.title'),
    description: t('home.guides.typeChart.description'),
    icon: 'i-lucide-shield',
    color: 'text-red-400',
    to: ''
  },
  {
    title: t('home.guides.evTraining.title'),
    description: t('home.guides.evTraining.description'),
    icon: 'i-lucide-trending-up',
    color: 'text-blue-400',
    to: '/guides/ev-training'
  },
  {
    title: t('home.guides.breeding.title'),
    description: t('home.guides.breeding.description'),
    icon: 'i-lucide-heart',
    color: 'text-pink-400',
    to: ''
  },
  {
    title: t('home.guides.moneyMaking.title'),
    description: t('home.guides.moneyMaking.description'),
    icon: 'i-lucide-coins',
    color: 'text-yellow-400',
    to: '/guides/money-making'
  },
  {
    title: t('home.guides.competitiveTiers.title'),
    description: t('home.guides.competitiveTiers.description'),
    icon: 'i-lucide-trophy',
    color: 'text-purple-400',
    to: ''
  },
  {
    title: t('home.guides.hiddenAbilities.title'),
    description: t('home.guides.hiddenAbilities.description'),
    icon: 'i-lucide-eye',
    color: 'text-green-400',
    to: ''
  }
])
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section relative overflow-hidden">
      <div class="hero-bg" />
      <div
        class="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-16 sm:py-24 md:py-32">
        <div class="flex items-center gap-3 mb-6">
          <img src="/pokeball.svg" alt="Pokeball" class="w-12 h-12 animate-bounce">
        </div>
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
          PokeMMO <span class="text-primary">Knowledge</span> Assist
        </h1>
        <p class="text-lg md:text-xl text-muted max-w-2xl mb-8">
          {{ $t('home.heroDescription') }}
        </p>
        <div class="flex flex-wrap gap-3 justify-center">
          <UButton to="/trivia/poke-type" :label="$t('home.playTrivia')" trailing-icon="i-lucide-gamepad-2" size="xl" />
          <UButton to="#guides" :label="$t('home.viewGuides')" trailing-icon="i-lucide-book-open" size="xl"
            variant="outline" />
        </div>
      </div>
    </section>

    <!-- Games Section -->
    <UPageSection id="games" :title="$t('home.gamesTitle')" :description="$t('home.gamesDescription')">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard>
          <template #header>
            <div class="flex items-center gap-3">
              <UIcon name="i-lucide-help-circle" class="text-2xl text-primary" />
              <h3 class="text-lg font-bold">
                {{ $t('home.triviaTitle') }}
              </h3>
            </div>
          </template>

          <p class="text-muted text-sm">
            {{ $t('home.triviaDescription') }}
          </p>

          <template #footer>
            <UButton :label="$t('home.playNow')" to="/trivia/poke-type" trailing-icon="i-lucide-arrow-right" block />
          </template>
        </UCard>
      </div>
    </UPageSection>

    <!-- Important Knowledges Section -->
    <UPageSection id="guides" :title="$t('home.guidesTitle')" :description="$t('home.guidesDescription')">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard v-for="guide in guides" :key="guide.title">
          <template #header>
            <div class="flex items-center gap-3">
              <UIcon :name="guide.icon" class="text-2xl" :class="guide.color" />
              <h3 class="text-lg font-bold">
                {{ guide.title }}
              </h3>
            </div>
          </template>

          <p class="text-muted text-sm">
            {{ guide.description }}
          </p>

          <template #footer>
            <UButton v-if="guide.to" :label="$t('home.readGuide')" :to="guide.to" trailing-icon="i-lucide-arrow-right"
              block />
            <UButton v-else :label="$t('home.comingSoon')" disabled variant="outline" block />
          </template>
        </UCard>
      </div>
    </UPageSection>
  </div>
</template>

<style scoped>
.hero-section {
  min-height: 360px;
}

@media (min-width: 768px) {
  .hero-section {
    min-height: 420px;
  }
}

.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 50% 0%, rgba(239, 68, 68, 0.15) 0%, transparent 60%),
    radial-gradient(ellipse 60% 50% at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
    radial-gradient(ellipse 60% 50% at 20% 20%, rgba(234, 179, 8, 0.08) 0%, transparent 50%);
}

:deep(.dark) .hero-bg,
.dark .hero-bg {
  background:
    radial-gradient(ellipse 80% 60% at 50% 0%, rgba(239, 68, 68, 0.12) 0%, transparent 60%),
    radial-gradient(ellipse 60% 50% at 80% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse 60% 50% at 20% 20%, rgba(234, 179, 8, 0.06) 0%, transparent 50%);
}
</style>
