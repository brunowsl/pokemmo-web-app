<script setup lang="ts">
useSeoMeta({
    title: 'EV Training Guide — PokeMMO Knowledge Assist',
    description: 'Complete guide to EV training in PokeMMO: best 10 EV/horde spots near PokéCenters, essential items, Power Item math, and efficient strategies for competitive Pokémon.'
})

interface EvSpot {
    pokemon: string
    location: string
    method: string
    region: string
    evYield: string
    nearPC: string
}

const hpSpots: EvSpot[] = [
    { pokemon: 'Stunfisk (×5)', location: 'Icirrus City (pond)', method: 'Surf', region: 'Unova', evYield: '10 HP', nearPC: 'Icirrus City PC — right next to the pond' },
    { pokemon: 'Marill (×5)', location: 'Route 114', method: 'Surf', region: 'Hoenn', evYield: '10 HP', nearPC: 'Fallarbor Town PC — very close' },
    { pokemon: 'Lickitung (×5)', location: 'Route 44', method: 'Grass', region: 'Johto', evYield: '10 HP', nearPC: 'Mahogany Town PC — short walk east' },
    { pokemon: 'Sealeo (×5)', location: 'Route 230', method: 'Surf', region: 'Sinnoh', evYield: '10 HP', nearPC: 'Fight Area PC — accessible via Surf' }
]

const attackSpots: EvSpot[] = [
    { pokemon: 'Bouffalant (×5)', location: 'Route 10', method: 'Grass', region: 'Unova', evYield: '10 Atk', nearPC: 'Opelucid City PC — adjacent route' },
    { pokemon: 'Rhydon (×5)', location: 'Victory Road', method: 'Cave', region: 'Sinnoh', evYield: '10 Atk', nearPC: 'Pokémon League PC — at the entrance' },
    { pokemon: 'Nidorino (×5)', location: 'Route 15', method: 'Grass', region: 'Kanto', evYield: '10 Atk', nearPC: 'Fuchsia City PC — short walk' },
    { pokemon: 'Machoke (×5)', location: 'Route 211', method: 'Grass', region: 'Sinnoh', evYield: '10 Atk', nearPC: 'Celestic Town — nearby' }
]

const defenseSpots: EvSpot[] = [
    { pokemon: 'Pelipper (×5)', location: 'Undella Bay', method: 'Surf', region: 'Unova', evYield: '10 Def', nearPC: 'Undella Town PC — Surf from town' },
    { pokemon: 'Pelipper (×5)', location: 'Route 222', method: 'Surf', region: 'Sinnoh', evYield: '10 Def', nearPC: 'Sunyshore City PC — very close' },
    { pokemon: 'Sandslash (×5)', location: 'Route 26', method: 'Grass', region: 'Johto', evYield: '10 Def', nearPC: 'Victory Road entrance — nearby' },
    { pokemon: 'Slowbro (×5)', location: 'Cape Brink', method: 'Grass', region: 'Kanto (Sevii)', evYield: '10 Def', nearPC: 'Two Island PC — short walk north' }
]

const spAtkSpots: EvSpot[] = [
    { pokemon: 'Golduck (×5)', location: 'Resort Area', method: 'Surf', region: 'Sinnoh', evYield: '10 SpA', nearPC: 'Resort Area PC — right there' },
    { pokemon: 'Golduck (×5)', location: 'Cape Brink (Two Island)', method: 'Surf', region: 'Kanto (Sevii)', evYield: '10 SpA', nearPC: 'Two Island PC — short walk north' },
    { pokemon: 'Golduck (×5)', location: 'Route 11', method: 'Grass', region: 'Unova', evYield: '10 SpA', nearPC: 'Opelucid City PC — nearby' },
    { pokemon: 'Flaaffy / Girafarig (×5)', location: 'Route 43', method: 'Grass', region: 'Johto', evYield: '10 SpA', nearPC: 'Mahogany Town PC — walk north' }
]

const spDefSpots: EvSpot[] = [
    { pokemon: 'Tentacruel (×5)', location: 'Battle Frontier', method: 'Surf', region: 'Hoenn', evYield: '10 SpD', nearPC: 'Battle Frontier PC — nearby' },
    { pokemon: 'Tentacruel (×5)', location: 'Seven Island', method: 'Surf', region: 'Kanto (Sevii)', evYield: '10 SpD', nearPC: 'Seven Island PC — right there' },
    { pokemon: 'Mantine (×5)', location: 'Undella Town', method: 'Surf', region: 'Unova', evYield: '10 SpD', nearPC: 'Undella Town PC — Surf from town' },
    { pokemon: 'Tentacruel (×5)', location: 'Route 26', method: 'Surf', region: 'Johto', evYield: '10 SpD', nearPC: 'Near Victory Road entrance' }
]

const speedSpots: EvSpot[] = [
    { pokemon: 'Rapidash (×5)', location: 'Route 12', method: 'Grass', region: 'Unova', evYield: '10 Spd', nearPC: 'Lacunosa Town PC — close by' },
    { pokemon: 'Liepard (×5)', location: 'Dreamyard (Dark Grass)', method: 'Dark Grass', region: 'Unova', evYield: '10 Spd', nearPC: 'Striaton City PC — very close' },
    { pokemon: 'Poliwhirl (×5)', location: 'Blackthorn City', method: 'Surf', region: 'Johto', evYield: '10 Spd', nearPC: 'Blackthorn City PC — right there' },
    { pokemon: 'Linoone (×5)', location: 'Route 121', method: 'Grass', region: 'Hoenn', evYield: '10 Spd', nearPC: 'Lilycove City PC — short walk' }
]

const statSections = [
    { name: 'HP', color: 'text-green-400', bgColor: 'bg-green-500/10', spots: hpSpots },
    { name: 'Attack', color: 'text-red-400', bgColor: 'bg-red-500/10', spots: attackSpots },
    { name: 'Defense', color: 'text-yellow-400', bgColor: 'bg-yellow-500/10', spots: defenseSpots },
    { name: 'Sp. Attack', color: 'text-blue-400', bgColor: 'bg-blue-500/10', spots: spAtkSpots },
    { name: 'Sp. Defense', color: 'text-purple-400', bgColor: 'bg-purple-500/10', spots: spDefSpots },
    { name: 'Speed', color: 'text-cyan-400', bgColor: 'bg-cyan-500/10', spots: speedSpots }
]

const items = [
    {
        name: 'Macho Brace',
        effect: 'Doubles all EVs gained from battle. Halves Speed during battle. With a 10 EV/horde spot → 20 EVs per horde.',
        icon: 'i-lucide-dumbbell',
        tip: 'Accessible early. Buy from Battle Frontier shops or GTL. Good option before you get Power Items.'
    },
    {
        name: 'Power Items',
        effect: 'Adds +8 EVs in a specific stat per Pokémon defeated. With a 10 EV/horde spot → 50 EVs per horde in the target stat.',
        icon: 'i-lucide-zap',
        tip: 'Power Weight (HP), Power Bracer (Atk), Power Belt (Def), Power Lens (SpA), Power Band (SpD), Power Anklet (Spd). Best EV multiplier in game.'
    },
    {
        name: 'Vitamins',
        effect: 'Gives +10 EVs instantly in a specific stat. Can be used until the stat reaches 252 EVs.',
        icon: 'i-lucide-pill',
        tip: 'HP Up, Protein, Iron, Calcium, Zinc, Carbos. Expensive but saves time. Use first to frontload EVs, then horde train the rest.'
    },
    {
        name: 'EV Reducing Berries',
        effect: 'Removes 10 EVs from a specific stat per berry used.',
        icon: 'i-lucide-eraser',
        tip: 'Pomeg (HP), Kelpsy (Atk), Qualot (Def), Hondew (SpA), Grepa (SpD), Tamato (Spd). Essential for fixing EV mistakes.'
    }
]

const commonSpreads = [
    { role: 'Physical Sweeper', spread: '252 Atk / 252 Spd / 4 HP', example: 'Gyarados, Garchomp, Lucario' },
    { role: 'Special Sweeper', spread: '252 SpA / 252 Spd / 4 HP', example: 'Alakazam, Gengar, Hydreigon' },
    { role: 'Physical Tank', spread: '252 HP / 252 Def / 4 Atk', example: 'Skarmory, Hippowdon, Ferrothorn' },
    { role: 'Special Tank', spread: '252 HP / 252 SpD / 4 SpA', example: 'Blissey, Chansey, Vaporeon' },
    { role: 'Mixed Wall', spread: '252 HP / 128 Def / 128 SpD', example: 'Eviolite Chansey, Porygon2' },
    { role: 'Bulky Attacker', spread: '252 HP / 252 Atk / 4 Def', example: 'Conkeldurr, Breloom, Metagross' }
]
</script>

<template>
    <div>
        <!-- Hero -->
        <section class="relative overflow-hidden">
            <div class="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-purple-500/5" />
            <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
                <UBadge color="info" variant="subtle" size="lg" class="mb-4">
                    Guide
                </UBadge>
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                    📊 EV Training Guide
                </h1>
                <p class="text-base sm:text-lg text-muted max-w-2xl mx-auto">
                    Everything you need to know about Effort Values in PokeMMO.
                    Best horde spots that give 10 EVs per battle near PokéCenters, essential items, and efficient
                    strategies
                    to build competitive Pokémon.
                </p>
            </div>
        </section>

        <!-- What are EVs -->
        <UPageSection>
            <div class="max-w-3xl mx-auto">
                <h2 class="text-2xl font-bold mb-4">
                    What are EVs?
                </h2>
                <p class="text-muted mb-4">
                    <strong class="text-default">Effort Values (EVs)</strong> are hidden stats that your Pokémon gains
                    by defeating other Pokémon in battle. Every wild or trainer Pokémon gives a specific amount of EVs
                    in one or more stats when defeated. These EVs directly increase your Pokémon's stats, making EV
                    training essential for competitive play.
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                    <div class="bg-elevated rounded-lg p-4 text-center">
                        <p class="text-2xl font-bold text-primary">
                            510
                        </p>
                        <p class="text-xs text-muted">
                            Max total EVs per Pokémon
                        </p>
                    </div>
                    <div class="bg-elevated rounded-lg p-4 text-center">
                        <p class="text-2xl font-bold text-blue-400">
                            252
                        </p>
                        <p class="text-xs text-muted">
                            Max per individual stat
                        </p>
                    </div>
                    <div class="bg-elevated rounded-lg p-4 text-center">
                        <p class="text-2xl font-bold text-green-400">
                            4 EVs
                        </p>
                        <p class="text-xs text-muted">
                            = +1 stat point at Lv. 100
                        </p>
                    </div>
                </div>
                <p class="text-muted text-sm">
                    In practice, most competitive Pokémon are trained with <strong class="text-default">252 / 252 /
                        4</strong> splits —
                    maxing out two key stats and putting the leftover 4 EVs into a third. The stats you choose depend on
                    the Pokémon's role on your team.
                </p>
            </div>
        </UPageSection>

        <!-- How it works in PokeMMO -->
        <UPageSection title="How EV Training Works in PokeMMO"
            description="PokeMMO uses horde encounters as the primary EV training method, which is faster than single-battle training.">
            <div class="max-w-3xl mx-auto space-y-4">
                <div class="bg-elevated rounded-lg p-4">
                    <h3 class="font-bold mb-2">
                        🎯 Horde Training (Primary Method)
                    </h3>
                    <p class="text-muted text-sm mb-3">
                        Hordes are groups of 5 wild Pokémon that appear at once. Defeating all 5 gives EVs from each one
                        —
                        meaning <strong class="text-default">5× the EVs per battle</strong>. The best spots have
                        Pokémon that each yield 2 EVs = <strong class="text-default">10 EVs per horde</strong>.
                        Combined with items, you can fully EV train a stat in minutes. Use a Pokémon with a spread move
                        (Earthquake, Surf, Heat Wave, etc.) to KO the entire horde in one turn.
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                        <div class="bg-default/5 rounded p-2 text-center">
                            <p class="font-bold text-default">
                                No Item
                            </p>
                            <p class="text-muted">
                                10 EVs/horde → 26 hordes
                            </p>
                        </div>
                        <div class="bg-default/5 rounded p-2 text-center">
                            <p class="font-bold text-yellow-400">
                                Macho Brace
                            </p>
                            <p class="text-muted">
                                20 EVs/horde → 13 hordes
                            </p>
                        </div>
                        <div class="bg-default/5 rounded p-2 text-center">
                            <p class="font-bold text-primary">
                                Power Item
                            </p>
                            <p class="text-muted">
                                50 EVs/horde → 6 hordes
                            </p>
                        </div>
                    </div>
                </div>
                <div class="bg-elevated rounded-lg p-4">
                    <h3 class="font-bold mb-2">
                        💊 Vitamins (Quick Start)
                    </h3>
                    <p class="text-muted text-sm">
                        Use Vitamins (Protein, Iron, Calcium, etc.) to add up to 252 EVs per stat instantly.
                        Each vitamin gives +10 EVs. If you use 10 Vitamins (100 EVs), you only need to horde train the
                        remaining 152 EVs — <strong class="text-default">just 4 hordes with a Power Item</strong>.
                        This saves significant time if you have the money.
                    </p>
                </div>
                <div class="bg-elevated rounded-lg p-4">
                    <h3 class="font-bold mb-2">
                        📱 Check Your EVs
                    </h3>
                    <p class="text-muted text-sm">
                        In PokeMMO, you can view your Pokémon's EVs in the Summary screen. The game shows the exact EV
                        distribution in a hexagonal chart, making it easy to track your progress without external tools.
                    </p>
                </div>
            </div>
        </UPageSection>

        <!-- Items -->
        <UPageSection title="Essential Items" description="These items make EV training faster and more efficient.">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
                <UCard v-for="item in items" :key="item.name">
                    <template #header>
                        <div class="flex items-center gap-2">
                            <UIcon :name="item.icon" class="text-xl text-primary" />
                            <h4 class="font-bold">
                                {{ item.name }}
                            </h4>
                        </div>
                    </template>
                    <p class="text-muted text-sm mb-2">
                        {{ item.effect }}
                    </p>
                    <p class="text-xs text-muted/70 italic">
                        💡 {{ item.tip }}
                    </p>
                </UCard>
            </div>
        </UPageSection>

        <!-- Training Spots by Stat -->
        <UPageSection title="Best Horde Training Spots"
            description="All spots below yield 10 EVs per horde (2 EVs × 5 Pokémon), have 100% encounter rate, and are close to a PokéCenter.">
            <div class="space-y-6 max-w-4xl mx-auto">
                <div v-for="section in statSections" :key="section.name">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="inline-block w-3 h-3 rounded-full" :class="section.bgColor" />
                        <h3 class="text-lg font-bold" :class="section.color">
                            {{ section.name }}
                        </h3>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm">
                            <thead>
                                <tr class="border-b border-default">
                                    <th class="text-left py-2 px-3 font-semibold text-muted">
                                        Pokémon
                                    </th>
                                    <th class="text-left py-2 px-3 font-semibold text-muted">
                                        Location
                                    </th>
                                    <th class="text-left py-2 px-3 font-semibold text-muted hidden sm:table-cell">
                                        Method
                                    </th>
                                    <th class="text-left py-2 px-3 font-semibold text-muted">
                                        Region
                                    </th>
                                    <th class="text-left py-2 px-3 font-semibold text-muted">
                                        EVs/Horde
                                    </th>
                                    <th class="text-left py-2 px-3 font-semibold text-muted hidden md:table-cell">
                                        Nearest PC
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="spot in section.spots" :key="spot.pokemon + spot.location"
                                    class="border-b border-default/50">
                                    <td class="py-2 px-3 font-medium">
                                        {{ spot.pokemon }}
                                    </td>
                                    <td class="py-2 px-3 text-muted">
                                        {{ spot.location }}
                                    </td>
                                    <td class="py-2 px-3 hidden sm:table-cell">
                                        <UBadge color="info" variant="subtle" size="xs">
                                            {{ spot.method }}
                                        </UBadge>
                                    </td>
                                    <td class="py-2 px-3">
                                        <UBadge color="neutral" variant="subtle" size="xs">
                                            {{ spot.region }}
                                        </UBadge>
                                    </td>
                                    <td class="py-2 px-3 font-mono text-xs text-primary">
                                        {{ spot.evYield }}
                                    </td>
                                    <td class="py-2 px-3 text-muted text-xs hidden md:table-cell">
                                        {{ spot.nearPC }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </UPageSection>

        <!-- Common EV Spreads -->
        <UPageSection title="Common EV Spreads"
            description="Standard EV distributions for different competitive roles.">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div v-for="spread in commonSpreads" :key="spread.role" class="bg-elevated rounded-lg p-4">
                    <h4 class="font-bold text-sm mb-1">
                        {{ spread.role }}
                    </h4>
                    <p class="text-primary font-mono text-xs mb-2">
                        {{ spread.spread }}
                    </p>
                    <p class="text-muted text-xs">
                        e.g. {{ spread.example }}
                    </p>
                </div>
            </div>
        </UPageSection>

        <!-- Step by step -->
        <UPageSection title="Quick EV Training Checklist"
            description="Follow these steps for fast and efficient EV training.">
            <div class="max-w-2xl mx-auto space-y-3">
                <div v-for="(step, i) in [
                    'Decide your EV spread based on the Pokémon\'s role (sweeper, tank, etc.)',
                    'Use Vitamins first — add up to 100 EVs per stat instantly (costs money but saves time)',
                    'Equip Macho Brace or the appropriate Power Item on your Pokémon',
                    'Go to the recommended horde spot for the stat you\'re training',
                    'Use a strong Pokémon with a spread move (Surf, Earthquake, etc.) at the front of your party',
                    'Put the Pokémon being trained in your party — it gets EVs from Exp Share',
                    'Battle hordes until you hit 252 EVs in that stat (check the Summary screen)',
                    'Repeat for the second stat, then put the remaining 4 EVs wherever you want',
                    'If you made a mistake, use EV-reducing berries to fix it'
                ]" :key="i" class="flex items-start gap-3">
                    <span
                        class="shrink-0 w-7 h-7 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center">
                        {{ i + 1 }}
                    </span>
                    <p class="text-muted text-sm pt-1">
                        {{ step }}
                    </p>
                </div>
            </div>
        </UPageSection>

        <!-- Back link -->
        <div class="text-center pb-8">
            <UButton to="/" label="Back to Home" icon="i-lucide-arrow-left" variant="ghost" />
        </div>
    </div>
</template>
