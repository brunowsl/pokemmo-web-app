<script setup lang="ts">
useSeoMeta({
    title: 'EV Training Guide — PokeMMO Knowledge Assist',
    description: 'Complete guide to EV training in PokeMMO: what are EVs, best horde locations by region, useful items, and efficient strategies.'
})

interface EvSpot {
    pokemon: string
    location: string
    region: string
    evYield: string
    notes: string
}

const hpSpots: EvSpot[] = [
    { pokemon: 'Dunsparce (×5)', location: 'Route 208', region: 'Sinnoh', evYield: '+1 HP each', notes: 'Horde encounter, easy to find' },
    { pokemon: 'Marill (×5)', location: 'Mt. Mortar', region: 'Johto', evYield: '+2 HP each', notes: 'Surf hordes, very efficient' },
    { pokemon: 'Tropius (×5)', location: 'Route 119', region: 'Hoenn', evYield: '+2 HP each', notes: 'Grass hordes, consistent spawn' }
]

const attackSpots: EvSpot[] = [
    { pokemon: 'Patrat (×5)', location: 'Route 1', region: 'Unova', evYield: '+1 Atk each', notes: 'Available very early in Unova' },
    { pokemon: 'Shuppet (×5)', location: 'Mt. Pyre', region: 'Hoenn', evYield: '+1 Atk each', notes: 'Night hordes, reliable' },
    { pokemon: 'Sneasel / Snover (×5)', location: 'Route 216–217', region: 'Sinnoh', evYield: '+1 Atk each', notes: 'Late-game Sinnoh, sometimes mixed hordes' }
]

const defenseSpots: EvSpot[] = [
    { pokemon: 'Geodude (×5)', location: 'RPokemon League Victory Road', region: 'Multiple', evYield: '+1 Def each', notes: 'Available in caves across regions' },
    { pokemon: 'Graveler (×5)', location: 'Iron Island', region: 'Sinnoh', evYield: '+2 Def each', notes: 'Higher EVs per encounter' },
    { pokemon: 'Sandshrew (×5)', location: 'Route 4', region: 'Kanto', evYield: '+1 Def each', notes: 'Early Kanto option' }
]

const spAtkSpots: EvSpot[] = [
    { pokemon: 'Gastly (×5)', location: 'Sprout Tower', region: 'Johto', evYield: '+1 SpA each', notes: 'Night encounters, reliable hordes' },
    { pokemon: 'Oddish (×5)', location: 'Route 5', region: 'Kanto', evYield: '+1 SpA each', notes: 'Night hordes in grass' },
    { pokemon: 'Litwick (×5)', location: 'Celestial Tower', region: 'Unova', evYield: '+1 SpA each', notes: 'Good for Special Attack training' }
]

const spDefSpots: EvSpot[] = [
    { pokemon: 'Tentacool (×5)', location: 'Various Surf routes', region: 'Multiple', evYield: '+1 SpD each', notes: 'Surf hordes, available everywhere' },
    { pokemon: 'Frillish (×5)', location: 'Driftveil City Surf', region: 'Unova', evYield: '+1 SpD each', notes: 'Surf horde encounters' }
]

const speedSpots: EvSpot[] = [
    { pokemon: 'Floatzel (×5)', location: 'Route 222', region: 'Sinnoh', evYield: '+2 Spd each', notes: 'West of Sunyshore, very efficient' },
    { pokemon: 'Basculin (×5)', location: 'Route 1 Surf', region: 'Unova', evYield: '+2 Spd each', notes: 'Surf encounters, high yield' },
    { pokemon: 'Zubat (×5)', location: 'Various caves', region: 'Multiple', evYield: '+1 Spd each', notes: 'Common in all regions, cave hordes' }
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
        effect: 'Doubles all EVs gained from battle. Halves Speed during battle.',
        icon: 'i-lucide-dumbbell',
        tip: 'The most accessible EV booster. Buy from Battle Frontier shops or GTL.'
    },
    {
        name: 'Power Items',
        effect: 'Adds +4 EVs in a specific stat per Pokémon defeated. Halves Speed in battle.',
        icon: 'i-lucide-zap',
        tip: 'Power Weight (HP), Power Bracer (Atk), Power Belt (Def), Power Lens (SpA), Power Band (SpD), Power Anklet (Spd).'
    },
    {
        name: 'Vitamins',
        effect: 'Gives +10 EVs instantly. Can be used until the stat reaches 100 EVs.',
        icon: 'i-lucide-pill',
        tip: 'HP Up, Protein, Iron, Calcium, Zinc, Carbos. Expensive but saves time. Use first, then horde train the rest.'
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
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/5" />
            <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
                <UBadge color="info" variant="subtle" size="lg" class="mb-4">
                    Guide
                </UBadge>
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                    📊 EV Training Guide
                </h1>
                <p class="text-base sm:text-lg text-muted max-w-2xl mx-auto">
                    Everything you need to know about Effort Values in PokeMMO.
                    Learn the best horde training locations, useful items, and efficient strategies to build competitive
                    Pokémon.
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
                    <p class="text-muted text-sm">
                        Hordes are groups of 5 wild Pokémon that appear at once. Defeating all 5 gives EVs from each one
                        —
                        meaning <strong class="text-default">5× the EVs per battle</strong>. Combined with items like
                        Macho Brace or Power Items,
                        you can fully EV train a Pokémon in just a few minutes. Use a Pokémon with a spread move
                        (Earthquake, Surf, Heat Wave, etc.) to KO the entire horde in one turn.
                    </p>
                </div>
                <div class="bg-elevated rounded-lg p-4">
                    <h3 class="font-bold mb-2">
                        💊 Vitamins (Quick Start)
                    </h3>
                    <p class="text-muted text-sm">
                        Use Vitamins (Protein, Iron, Calcium, etc.) first to quickly add 100 EVs to a stat.
                        Each vitamin gives +10 and works up to 100 total EVs per stat. Then horde train the remaining
                        152.
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
            description="Recommended locations for each stat across all PokeMMO regions.">
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
                                    <th class="text-left py-2 px-3 font-semibold text-muted">
                                        Region
                                    </th>
                                    <th class="text-left py-2 px-3 font-semibold text-muted">
                                        EV Yield
                                    </th>
                                    <th class="text-left py-2 px-3 font-semibold text-muted hidden sm:table-cell">
                                        Notes
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="spot in section.spots" :key="spot.pokemon"
                                    class="border-b border-default/50">
                                    <td class="py-2 px-3 font-medium">
                                        {{ spot.pokemon }}
                                    </td>
                                    <td class="py-2 px-3 text-muted">
                                        {{ spot.location }}
                                    </td>
                                    <td class="py-2 px-3">
                                        <UBadge color="neutral" variant="subtle" size="xs">
                                            {{ spot.region }}
                                        </UBadge>
                                    </td>
                                    <td class="py-2 px-3 text-muted">
                                        {{ spot.evYield }}
                                    </td>
                                    <td class="py-2 px-3 text-muted text-xs hidden sm:table-cell">
                                        {{ spot.notes }}
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
