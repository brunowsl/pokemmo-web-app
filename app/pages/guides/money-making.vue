<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('moneyGuide.seoTitle'),
  description: () => t('moneyGuide.seoDescription')
})

// Helper function to get array items from translation by accessing each index directly
const getDetailsArray = (key: string, count: number): string[] => {
  const details: string[] = []
  for (let i = 0; i < count; i++) {
    details.push(t(`${key}[${i}]`))
  }
  return details
}

const methods = computed(() => [
  {
    name: t('moneyGuide.methods.gymReruns.name'),
    difficulty: t('moneyGuide.methods.gymReruns.difficulty'),
    income: t('moneyGuide.methods.gymReruns.income'),
    icon: 'i-lucide-swords',
    color: 'text-red-400',
    description: t('moneyGuide.methods.gymReruns.description'),
    details: getDetailsArray('moneyGuide.methods.gymReruns.details', 7),
    videoUrl: 'https://www.youtube.com/embed/Z0elK91eg60'
  },
  {
    name: t('moneyGuide.methods.trainerRebattles.name'),
    difficulty: t('moneyGuide.methods.trainerRebattles.difficulty'),
    income: t('moneyGuide.methods.trainerRebattles.income'),
    icon: 'i-lucide-user',
    color: 'text-blue-400',
    description: t('moneyGuide.methods.trainerRebattles.description'),
    details: getDetailsArray('moneyGuide.methods.trainerRebattles.details', 6)
  },
  {
    name: t('moneyGuide.methods.leppaBerryFarming.name'),
    difficulty: t('moneyGuide.methods.leppaBerryFarming.difficulty'),
    income: t('moneyGuide.methods.leppaBerryFarming.income'),
    icon: 'i-lucide-flower-2',
    color: 'text-green-400',
    description: t('moneyGuide.methods.leppaBerryFarming.description'),
    details: getDetailsArray('moneyGuide.methods.leppaBerryFarming.details', 6)
  },
  {
    name: t('moneyGuide.methods.gtlTrading.name'),
    difficulty: t('moneyGuide.methods.gtlTrading.difficulty'),
    income: t('moneyGuide.methods.gtlTrading.income'),
    icon: 'i-lucide-bar-chart-3',
    color: 'text-purple-400',
    description: t('moneyGuide.methods.gtlTrading.description'),
    details: getDetailsArray('moneyGuide.methods.gtlTrading.details', 7)
  },
  {
    name: t('moneyGuide.methods.pickupFarming.name'),
    difficulty: t('moneyGuide.methods.pickupFarming.difficulty'),
    income: t('moneyGuide.methods.pickupFarming.income'),
    icon: 'i-lucide-package',
    color: 'text-yellow-400',
    description: t('moneyGuide.methods.pickupFarming.description'),
    details: getDetailsArray('moneyGuide.methods.pickupFarming.details', 6)
  },
  {
    name: t('moneyGuide.methods.catchingSelling.name'),
    difficulty: t('moneyGuide.methods.catchingSelling.difficulty'),
    income: t('moneyGuide.methods.catchingSelling.income'),
    icon: 'i-lucide-target',
    color: 'text-cyan-400',
    description: t('moneyGuide.methods.catchingSelling.description'),
    details: getDetailsArray('moneyGuide.methods.catchingSelling.details', 7)
  },
  {
    name: t('moneyGuide.methods.eventParticipation.name'),
    difficulty: t('moneyGuide.methods.eventParticipation.difficulty'),
    income: t('moneyGuide.methods.eventParticipation.income'),
    icon: 'i-lucide-calendar',
    color: 'text-orange-400',
    description: t('moneyGuide.methods.eventParticipation.description'),
    details: getDetailsArray('moneyGuide.methods.eventParticipation.details', 6)
  }
])

const tips = computed(() => [
  {
    title: t('moneyGuide.tips.amuletCoin.title'),
    description: t('moneyGuide.tips.amuletCoin.description')
  },
  {
    title: t('moneyGuide.tips.combineMethods.title'),
    description: t('moneyGuide.tips.combineMethods.description')
  },
  {
    title: t('moneyGuide.tips.multipleAccounts.title'),
    description: t('moneyGuide.tips.multipleAccounts.description')
  },
  {
    title: t('moneyGuide.tips.investTeam.title'),
    description: t('moneyGuide.tips.investTeam.description')
  },
  {
    title: t('moneyGuide.tips.knowCooldowns.title'),
    description: t('moneyGuide.tips.knowCooldowns.description')
  }
])
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 bg-linear-to-br from-yellow-500/10 via-transparent to-green-500/5" />
      <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
        <UBadge color="warning" variant="subtle" size="lg" class="mb-4">
          {{ $t('moneyGuide.badge') }}
        </UBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          {{ $t('moneyGuide.title') }}
        </h1>
        <p class="text-base sm:text-lg text-muted max-w-2xl mx-auto">
          {{ $t('moneyGuide.description') }}
        </p>
      </div>
    </section>

    <!-- What is PokéYen -->
    <UPageSection>
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">
          {{ $t('moneyGuide.whatIsPokeyen') }}
        </h2>
        <p class="text-muted mb-4">
          {{ $t('moneyGuide.pokeyenExplanation') }}
        </p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div class="bg-elevated rounded-lg p-3 text-center">
            <p class="text-xl font-bold text-primary">
              ~200k
            </p>
            <p class="text-xs text-muted">
              {{ $t('moneyGuide.avgGymRerun') }}
            </p>
          </div>
          <div class="bg-elevated rounded-lg p-3 text-center">
            <p class="text-xl font-bold text-green-400">
              100k/day
            </p>
            <p class="text-xs text-muted">
              {{ $t('moneyGuide.berryFarming') }}
            </p>
          </div>
          <div class="bg-elevated rounded-lg p-3 text-center">
            <p class="text-xl font-bold text-purple-400">
              2-5M
            </p>
            <p class="text-xs text-muted">
              {{ $t('moneyGuide.dailyHardcore') }}
            </p>
          </div>
          <div class="bg-elevated rounded-lg p-3 text-center">
            <p class="text-xl font-bold text-yellow-400">
              ∞
            </p>
            <p class="text-xs text-muted">
              {{ $t('moneyGuide.gtlTrading') }}
            </p>
          </div>
        </div>
      </div>
    </UPageSection>

    <!-- Methods -->
    <UPageSection :title="$t('moneyGuide.methodsTitle')" :description="$t('moneyGuide.methodsDesc')">
      <div class="space-y-6 max-w-4xl mx-auto">
        <UCard v-for="method in methods" :key="method.name">
          <template #header>
            <div class="flex items-center justify-between flex-wrap gap-2">
              <div class="flex items-center gap-3">
                <UIcon :name="method.icon" class="text-2xl" :class="method.color" />
                <h3 class="text-lg font-bold">
                  {{ method.name }}
                </h3>
              </div>
              <div class="flex items-center gap-2">
                <UBadge color="neutral" variant="subtle" size="sm">
                  {{ method.difficulty }}
                </UBadge>
                <UBadge color="primary" variant="subtle" size="sm">
                  {{ method.income }}
                </UBadge>
              </div>
            </div>
          </template>

          <p class="text-muted text-sm mb-4">
            {{ method.description }}
          </p>

          <ul class="space-y-1.5">
            <li v-for="(detail, i) in method.details" :key="i" class="flex items-start gap-2 text-sm">
              <UIcon name="i-lucide-chevron-right" class="text-primary shrink-0 mt-0.5" />
              <span class="text-muted">{{ detail }}</span>
            </li>
          </ul>

          <div v-if="method.videoUrl" class="mt-4">
            <div class="aspect-video rounded-lg overflow-hidden">
              <iframe
                :src="method.videoUrl"
                class="w-full h-full"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        </UCard>
      </div>
    </UPageSection>

    <!-- Pro Tips -->
    <UPageSection :title="$t('moneyGuide.proTips')" :description="$t('moneyGuide.proTipsDesc')">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <UCard v-for="tip in tips" :key="tip.title">
          <template #header>
            <h4 class="font-bold text-sm">
              {{ tip.title }}
            </h4>
          </template>
          <p class="text-muted text-xs">
            {{ tip.description }}
          </p>
        </UCard>
      </div>
    </UPageSection>

    <!-- Back link -->
    <div class="text-center pb-8">
      <UButton to="/" :label="$t('moneyGuide.backToHome')" icon="i-lucide-arrow-left" variant="ghost" />
    </div>
  </div>
</template>
