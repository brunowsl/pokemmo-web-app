<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
    title: () => t('evGuide.seoTitle'),
    description: () => t('evGuide.seoDescription')
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

const statSections = computed(() => [
    { name: t('evGuide.stats.hp'), color: 'text-green-400', bgColor: 'bg-green-500/10', spots: hpSpots },
    { name: t('evGuide.stats.attack'), color: 'text-red-400', bgColor: 'bg-red-500/10', spots: attackSpots },
    { name: t('evGuide.stats.defense'), color: 'text-yellow-400', bgColor: 'bg-yellow-500/10', spots: defenseSpots },
    { name: t('evGuide.stats.spAttack'), color: 'text-blue-400', bgColor: 'bg-blue-500/10', spots: spAtkSpots },
    { name: t('evGuide.stats.spDefense'), color: 'text-purple-400', bgColor: 'bg-purple-500/10', spots: spDefSpots },
    { name: t('evGuide.stats.speed'), color: 'text-cyan-400', bgColor: 'bg-cyan-500/10', spots: speedSpots }
])

const items = computed(() => [
    {
        name: t('evGuide.items.machoBrace.name'),
        effect: t('evGuide.items.machoBrace.effect'),
        icon: 'i-lucide-dumbbell',
        tip: t('evGuide.items.machoBrace.tip')
    },
    {
        name: t('evGuide.items.powerItems.name'),
        effect: t('evGuide.items.powerItems.effect'),
        icon: 'i-lucide-zap',
        tip: t('evGuide.items.powerItems.tip')
    },
    {
        name: t('evGuide.items.vitamins.name'),
        effect: t('evGuide.items.vitamins.effect'),
        icon: 'i-lucide-pill',
        tip: t('evGuide.items.vitamins.tip')
    },
    {
        name: t('evGuide.items.evBerries.name'),
        effect: t('evGuide.items.evBerries.effect'),
        icon: 'i-lucide-eraser',
        tip: t('evGuide.items.evBerries.tip')
    }
])

const commonSpreads = computed(() => [
    { role: t('evGuide.roles.physicalSweeper'), spread: '252 Atk / 252 Spd / 4 HP', example: 'Gyarados, Garchomp, Lucario' },
    { role: t('evGuide.roles.specialSweeper'), spread: '252 SpA / 252 Spd / 4 HP', example: 'Alakazam, Gengar, Hydreigon' },
    { role: t('evGuide.roles.physicalTank'), spread: '252 HP / 252 Def / 4 Atk', example: 'Skarmory, Hippowdon, Ferrothorn' },
    { role: t('evGuide.roles.specialTank'), spread: '252 HP / 252 SpD / 4 SpA', example: 'Blissey, Chansey, Vaporeon' },
    { role: t('evGuide.roles.mixedWall'), spread: '252 HP / 128 Def / 128 SpD', example: 'Eviolite Chansey, Porygon2' },
    { role: t('evGuide.roles.bulkyAttacker'), spread: '252 HP / 252 Atk / 4 Def', example: 'Conkeldurr, Breloom, Metagross' }
])

const steps = computed(() => t('evGuide.steps', { returnObjects: true }) as unknown as string[])
</script>

<template>
    <div>
        <!-- Hero -->
        <section class="relative overflow-hidden">
            <div class="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-purple-500/5" />
            <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
                <UBadge color="info" variant="subtle" size="lg" class="mb-4">
                    {{ $t('evGuide.badge') }}
                </UBadge>
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                    {{ $t('evGuide.title') }}
                </h1>
                <p class="text-base sm:text-lg text-muted max-w-2xl mx-auto">
                    {{ $t('evGuide.description') }}
                </p>
            </div>
        </section>

        <!-- What are EVs -->
        <UPageSection>
            <div class="max-w-3xl mx-auto">
                <h2 class="text-2xl font-bold mb-4">
                    {{ $t('evGuide.whatAreEvs') }}
                </h2>
                <p class="text-muted mb-4">
                    {{ $t('evGuide.evsExplanation') }}
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                    <div class="bg-elevated rounded-lg p-4 text-center">
                        <p class="text-2xl font-bold text-primary">
                            510
                        </p>
                        <p class="text-xs text-muted">
                            {{ $t('evGuide.maxTotalEvs') }}
                        </p>
                    </div>
                    <div class="bg-elevated rounded-lg p-4 text-center">
                        <p class="text-2xl font-bold text-blue-400">
                            252
                        </p>
                        <p class="text-xs text-muted">
                            {{ $t('evGuide.maxPerStat') }}
                        </p>
                    </div>
                    <div class="bg-elevated rounded-lg p-4 text-center">
                        <p class="text-2xl font-bold text-green-400">
                            4 EVs
                        </p>
                        <p class="text-xs text-muted">
                            {{ $t('evGuide.evStatPoint') }}
                        </p>
                    </div>
                </div>
                <p class="text-muted text-sm">
                    {{ $t('evGuide.evSplitExplanation') }}
                </p>
            </div>
        </UPageSection>

        <!-- How it works in PokeMMO -->
        <UPageSection :title="$t('evGuide.howItWorks')" :description="$t('evGuide.howItWorksDesc')">
            <div class="max-w-3xl mx-auto space-y-4">
                <div class="bg-elevated rounded-lg p-4">
                    <h3 class="font-bold mb-2">
                        {{ $t('evGuide.hordeTraining') }}
                    </h3>
                    <p class="text-muted text-sm mb-3">
                        {{ $t('evGuide.hordeExplanation') }}
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                        <div class="bg-default/5 rounded p-2 text-center">
                            <p class="font-bold text-default">
                                {{ $t('evGuide.noItem') }}
                            </p>
                            <p class="text-muted">
                                {{ $t('evGuide.noItemCalc') }}
                            </p>
                        </div>
                        <div class="bg-default/5 rounded p-2 text-center">
                            <p class="font-bold text-yellow-400">
                                {{ $t('evGuide.machoBraceLabel') }}
                            </p>
                            <p class="text-muted">
                                {{ $t('evGuide.machoBraceCalc') }}
                            </p>
                        </div>
                        <div class="bg-default/5 rounded p-2 text-center">
                            <p class="font-bold text-primary">
                                {{ $t('evGuide.powerItemLabel') }}
                            </p>
                            <p class="text-muted">
                                {{ $t('evGuide.powerItemCalc') }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="bg-elevated rounded-lg p-4">
                    <h3 class="font-bold mb-2">
                        {{ $t('evGuide.vitaminsTitle') }}
                    </h3>
                    <p class="text-muted text-sm">
                        {{ $t('evGuide.vitaminsExplanation') }}
                    </p>
                </div>
                <div class="bg-elevated rounded-lg p-4">
                    <h3 class="font-bold mb-2">
                        {{ $t('evGuide.checkEvs') }}
                    </h3>
                    <p class="text-muted text-sm">
                        {{ $t('evGuide.checkEvsExplanation') }}
                    </p>
                </div>
            </div>
        </UPageSection>

        <!-- Items -->
        <UPageSection :title="$t('evGuide.essentialItems')" :description="$t('evGuide.essentialItemsDesc')">
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
        <UPageSection :title="$t('evGuide.bestSpots')" :description="$t('evGuide.bestSpotsDesc')">
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
                                        {{ $t('evGuide.tableHeaders.pokemon') }}
                                    </th>
                                    <th class="text-left py-2 px-3 font-semibold text-muted">
                                        {{ $t('evGuide.tableHeaders.location') }}
                                    </th>
                                    <th class="text-left py-2 px-3 font-semibold text-muted hidden sm:table-cell">
                                        {{ $t('evGuide.tableHeaders.method') }}
                                    </th>
                                    <th class="text-left py-2 px-3 font-semibold text-muted">
                                        {{ $t('evGuide.tableHeaders.region') }}
                                    </th>
                                    <th class="text-left py-2 px-3 font-semibold text-muted">
                                        {{ $t('evGuide.tableHeaders.evsHorde') }}
                                    </th>
                                    <th class="text-left py-2 px-3 font-semibold text-muted hidden md:table-cell">
                                        {{ $t('evGuide.tableHeaders.nearestPC') }}
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
        <UPageSection :title="$t('evGuide.commonSpreads')" :description="$t('evGuide.commonSpreadsDesc')">
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
        <UPageSection :title="$t('evGuide.checklist')" :description="$t('evGuide.checklistDesc')">
            <div class="max-w-2xl mx-auto space-y-3">
                <div v-for="(step, i) in steps" :key="i" class="flex items-start gap-3">
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
            <UButton to="/" :label="$t('evGuide.backToHome')" icon="i-lucide-arrow-left" variant="ghost" />
        </div>
    </div>
</template>
