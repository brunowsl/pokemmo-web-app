<script setup lang="ts">
const guides = [
  {
    title: 'Type Matchup Chart',
    description: 'Master type effectiveness — know what\'s super effective, not very effective, and immune for every type combination.',
    icon: 'i-lucide-shield',
    color: 'text-red-400',
    to: ''
  },
  {
    title: 'EV Training Guide',
    description: 'Learn how to EV train your Pokémon efficiently with the best hotspots and strategies in PokeMMO.',
    icon: 'i-lucide-trending-up',
    color: 'text-blue-400',
    to: '/guides/ev-training'
  },
  {
    title: 'Breeding Basics',
    description: 'Understand IVs, natures, egg groups, and how to breed competitive Pokémon from scratch.',
    icon: 'i-lucide-heart',
    color: 'text-pink-400',
    to: ''
  },
  {
    title: 'Money Making',
    description: 'The best methods to earn PokéYen — from Gym reruns to Berry farming and GTL flipping.',
    icon: 'i-lucide-coins',
    color: 'text-yellow-400',
    to: '/guides/money-making'
  },
  {
    title: 'Competitive Tiers',
    description: 'Understand OU, UU, NU, and Doubles tiers, banned Pokémon, and the current metagame.',
    icon: 'i-lucide-trophy',
    color: 'text-purple-400',
    to: ''
  },
  {
    title: 'Hidden Abilities',
    description: 'Where to find hidden ability Pokémon and which ones are the most useful for competitive play.',
    icon: 'i-lucide-eye',
    color: 'text-green-400',
    to: ''
  }
]
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
          Improve your Pokémon knowledge through fun trivia games!
          Test yourself on types, abilities, and more to become a better PokeMMO player.
        </p>
        <div class="flex flex-wrap gap-3 justify-center">
          <UButton to="/trivia/poke-type" label="Play Type Trivia" trailing-icon="i-lucide-gamepad-2" size="xl" />
          <UButton to="#guides" label="View Guides" trailing-icon="i-lucide-book-open" size="xl" variant="outline" />
        </div>
      </div>
    </section>

    <!-- Games Section -->
    <UPageSection id="games" title="Games & Trivias"
      description="Challenge yourself with fun games to sharpen your Pokémon knowledge.">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard>
          <template #header>
            <div class="flex items-center gap-3">
              <UIcon name="i-lucide-help-circle" class="text-2xl text-primary" />
              <h3 class="text-lg font-bold">
                Poke Type Trivia
              </h3>
            </div>
          </template>

          <p class="text-muted text-sm">
            A Pokémon picture and name is shown — guess its type(s)!
            Choose from 6 random types with a 30-second timer per round.
          </p>

          <template #footer>
            <UButton label="Play now" to="/trivia/poke-type" trailing-icon="i-lucide-arrow-right" block />
          </template>
        </UCard>
      </div>
    </UPageSection>

    <!-- Important Knowledges Section -->
    <UPageSection id="guides" title="Important Knowledges"
      description="Essential guides every PokeMMO player should know to get ahead in the game.">
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
            <UButton v-if="guide.to" label="Read guide" :to="guide.to" trailing-icon="i-lucide-arrow-right" block />
            <UButton v-else label="Coming soon" disabled variant="outline" block />
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
