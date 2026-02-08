<script setup lang="ts">
useSeoMeta({
  title: 'Money Making Guide — PokeMMO Knowledge Assist',
  description: 'Learn the best methods to earn PokéYen in PokeMMO: gym reruns, berry farming, trainer rebattles, GTL trading, and more.'
})

const methods = [
  {
    name: 'Gym Reruns',
    difficulty: 'Medium',
    income: '~150k–300k per run',
    icon: 'i-lucide-swords',
    color: 'text-red-400',
    description: 'The most popular and consistent money-making method in PokeMMO. After completing a region\'s storyline, you can rebattle all Gym Leaders. The key is having a fast, optimized team that can sweep each gym quickly.',
    details: [
      'Requires completing the region\'s Elite Four first',
      'Gyms reset on a cooldown (approximately 18 hours)',
      'Use Amulet Coin to double prize money from trainer battles',
      'Best regions for reruns: Kanto and Unova (highest payouts)',
      'A good sweep team like Cloyster (Shell Smash + Skill Link) or Cinccino (Technician) can clear fast',
      'With Amulet Coin, expect ~150k–300k per full gym run depending on the region',
      'All 4 regions (Kanto, Johto, Hoenn, Sinnoh, Unova) can be run in rotation for maximum income'
    ]
  },
  {
    name: 'Trainer Rebattles',
    difficulty: 'Easy',
    income: '~100k–200k per cycle',
    icon: 'i-lucide-user',
    color: 'text-blue-400',
    description: 'After beating the storyline, NPC trainers across the map can be rebattled on a cooldown. "Rich trainers" (those who give the most money) are the priority targets. Pair with Amulet Coin for double rewards.',
    details: [
      'Trainers reset approximately every 6 hours after being defeated',
      'Focus on "Rich Boy", "Lady", and "Gentleman" trainer classes — they pay the most',
      'Amulet Coin is essential to double all earnings',
      'Search PokeMMO forums for updated rich trainer location maps',
      'Can be combined with gym reruns in the same session',
      'Using a Pokémon with Pay Day (e.g., Persian) adds a small bonus per battle'
    ]
  },
  {
    name: 'Leppa Berry Farming',
    difficulty: 'Easy',
    income: '~50k–100k per harvest',
    icon: 'i-lucide-flower-2',
    color: 'text-green-400',
    description: 'One of the most passive income methods. Leppa Berries are always in demand because they restore PP and are essential for horde EV training. Plant them, wait for the growth cycle, harvest, and sell on the GTL.',
    details: [
      'Leppa Berries take approximately 4–8 hours to grow depending on watering',
      'Best planting spots: Abundant Shrine area in Unova and various berry plots across regions',
      'Plant in all available berry slots across multiple regions for maximum yield',
      'Can be done on multiple accounts for massive passive income',
      'Takes only ~5 minutes per account to plant and harvest',
      'Also consider farming Lum Berries (cure all status) which sell well for competitive players'
    ]
  },
  {
    name: 'GTL Trading (Global Trade Link)',
    difficulty: 'Hard',
    income: 'Varies — potentially millions',
    icon: 'i-lucide-bar-chart-3',
    color: 'text-purple-400',
    description: 'The GTL is PokeMMO\'s player-driven marketplace. Experienced players buy low and sell high, flipping items, breeding materials, and competitive Pokémon. This requires market knowledge and initial capital.',
    details: [
      'Study price trends for popular items (vitamins, evolution stones, TMs)',
      'Buy Pokémon with good IVs/natures cheaply and resell at higher prices',
      'Breeding materials (Dittos with specific IVs) are always in high demand',
      'Event items often spike in price after events end — stock up during events',
      'Requires initial capital and patience to learn the market',
      'Watch for underpriced listings and snipe good deals',
      'Use the GTL\'s filter and sorting systems to find bargains'
    ]
  },
  {
    name: 'Pickup Farming',
    difficulty: 'Easy',
    income: '~30k–80k per hour',
    icon: 'i-lucide-package',
    color: 'text-yellow-400',
    description: 'The Pickup ability lets Pokémon randomly find items after battle. A team of 5+ Pokémon with Pickup (like Meowth, Zigzagoon, or Linoone) will accumulate valuable items over time while you do other activities.',
    details: [
      'Higher level Pokémon with Pickup find better items',
      'At level 41+, you can find Rare Candies, PP Ups, and more',
      'Best Pokémon: Linoone (fast + Pickup), Meowth (Pickup + Pay Day)',
      'Works well when combined with EV training or leveling',
      'Collect and sell valuable items on the GTL periodically',
      'Passive income — items accumulate while doing other things'
    ]
  },
  {
    name: 'Catching & Selling Pokémon',
    difficulty: 'Medium',
    income: '~50k–500k+ per catch',
    icon: 'i-lucide-target',
    color: 'text-cyan-400',
    description: 'Catching wild Pokémon with good IVs, natures, or in useful egg groups and selling them on the GTL. Safari Zone Pokémon in valuable egg groups with good IVs are a classic moneymaker.',
    details: [
      'Focus on Pokémon in popular egg groups (Dragon, Monster, Field)',
      'Good IVs in even one stat can sell well if the egg group is valuable',
      'Safari Zone is cost-efficient: entry fee includes 30 balls',
      'Magikarp (Water 2 + Dragon egg group) with good IVs sell well for breeders',
      'Ditto with specific IVs are extremely valuable on the GTL',
      'Check current GTL prices before farming to know what\'s profitable',
      'Chansey/Blissey catching for Lucky Eggs is also a viable method'
    ]
  },
  {
    name: 'Event Participation',
    difficulty: 'Varies',
    income: 'Event-dependent',
    icon: 'i-lucide-calendar',
    color: 'text-orange-400',
    description: 'PokeMMO runs regular events such as PvP tournaments, catch events, and seasonal activities (Halloween, Christmas, Lunar New Year). These often give exclusive cosmetics, items, and direct PokéYen rewards.',
    details: [
      'Check the PokeMMO forums and in-game announcements for scheduled events',
      'Seasonal events (Halloween, Christmas, Lunar New Year) are the biggest',
      'Raid events give large amounts of money and rare items',
      'Event-exclusive items and cosmetics can be held and sold later at a premium',
      'PvP tournaments offer PokéYen prizes and bragging rights',
      'Participating consistently is one of the best ways for newer players to earn'
    ]
  }
]

const tips = [
  {
    title: 'Always Equip Amulet Coin',
    description: 'Doubles prize money from NPC battles. Note: in PokeMMO, Amulet Coins have durability and eventually break, so stock up.'
  },
  {
    title: 'Combine Methods',
    description: 'Do gym reruns + trainer rebattles in one session. Farm berries between cooldowns. Run Pickup Pokémon while EV training.'
  },
  {
    title: 'Multiple Accounts',
    description: 'Many veteran players run 2–6 accounts for berry farming and gym reruns simultaneously, multiplying their passive income.'
  },
  {
    title: 'Invest in Your Team',
    description: 'Spending money on a fast sweep team (e.g., Cloyster with Shell Smash) pays for itself quickly through faster gym reruns.'
  },
  {
    title: 'Know Your Cooldowns',
    description: 'Gym reruns (~18h), trainer rebattles (~6h), berry harvests (~6h). Plan your play sessions around these timers.'
  }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 bg-linear-to-br from-yellow-500/10 via-transparent to-green-500/5" />
      <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
        <UBadge color="warning" variant="subtle" size="lg" class="mb-4">
          Guide
        </UBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          💰 Money Making Guide
        </h1>
        <p class="text-base sm:text-lg text-muted max-w-2xl mx-auto">
          Master the art of earning PokéYen in PokeMMO. From gym reruns to GTL trading,
          learn the most effective methods to fund your competitive teams, shinies, and cosmetics.
        </p>
      </div>
    </section>

    <!-- What is PokéYen -->
    <UPageSection>
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">
          What is PokéYen?
        </h2>
        <p class="text-muted mb-4">
          PokéYen (¥) is the main currency in PokeMMO. You need it for virtually everything:
          buying items, TMs, vitamins, breeding, entering facilities, cosmetics, and trading
          on the Global Trade Link (GTL). Unlike single-player Pokémon games where money is abundant,
          PokeMMO's economy is player-driven and inflationary, making efficient money-making a critical skill.
        </p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div class="bg-elevated rounded-lg p-3 text-center">
            <p class="text-xl font-bold text-primary">
              ~200k
            </p>
            <p class="text-xs text-muted">
              Avg. Gym Rerun
            </p>
          </div>
          <div class="bg-elevated rounded-lg p-3 text-center">
            <p class="text-xl font-bold text-green-400">
              100k/day
            </p>
            <p class="text-xs text-muted">
              Berry Farming
            </p>
          </div>
          <div class="bg-elevated rounded-lg p-3 text-center">
            <p class="text-xl font-bold text-purple-400">
              2-5M
            </p>
            <p class="text-xs text-muted">
              Daily (Hardcore)
            </p>
          </div>
          <div class="bg-elevated rounded-lg p-3 text-center">
            <p class="text-xl font-bold text-yellow-400">
              ∞
            </p>
            <p class="text-xs text-muted">
              GTL Trading
            </p>
          </div>
        </div>
      </div>
    </UPageSection>

    <!-- Methods -->
    <UPageSection title="Money Making Methods"
      description="Here are the most popular and effective ways to earn PokéYen, ranked by accessibility and consistency.">
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
        </UCard>
      </div>
    </UPageSection>

    <!-- Pro Tips -->
    <UPageSection title="Pro Tips" description="Quick tips to maximize your income efficiency.">
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
      <UButton to="/" label="Back to Home" icon="i-lucide-arrow-left" variant="ghost" />
    </div>
  </div>
</template>
