<script setup lang="ts">
import type { RegionName } from '~/composables/usePokemonApi'

const { t } = useI18n()

const {
    state,
    selectedRegion,
    setRegion,
    toggleType,
    submitAnswer,
    nextRound,
    resetGame,
    getPokemonImage,
    getPokemonName,
    TIMER_DURATION
} = usePokeTypeTrivia()

const {
    pokemon,
    selectedTypes,
    correctTypes,
    optionTypes,
    answered,
    isCorrect,
    timeLeft,
    timedOut,
    score,
    round,
    loading
} = state

const gameStarted = computed(() => round.value > 0)

const regions = computed<{ value: RegionName, label: string }[]>(() => [
    { value: 'all', label: t('trivia.allRegions') },
    { value: 'kanto', label: 'Kanto' },
    { value: 'johto', label: 'Johto' },
    { value: 'hoenn', label: 'Hoenn' },
    { value: 'sinnoh', label: 'Sinnoh' },
    { value: 'unova', label: 'Unova' }
])

function selectRegion(region: RegionName) {
    setRegion(region)
}

function startGame() {
    resetGame()
    nextRound()
}
</script>

<template>
    <div class="trivia-page">
        <!-- Start screen -->
        <div v-if="!gameStarted && !loading" class="flex flex-col items-center justify-center h-full text-center px-4">
            <h1 class="text-3xl sm:text-4xl font-bold mb-4">
                {{ $t('trivia.title') }}
            </h1>
            <p class="text-base sm:text-lg text-gray-400 mb-2">
                {{ $t('trivia.subtitle') }}
            </p>
            <p class="text-xs sm:text-sm text-gray-500 mb-6">
                {{ $t('trivia.instructions') }}
            </p>

            <!-- Region Selection -->
            <div class="mb-6 w-full max-w-sm">
                <p class="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-3">
                    {{ $t('trivia.chooseRegion') }}
                </p>
                <div class="grid grid-cols-2 gap-2">
                    <UButton v-for="r in regions" :key="r.value" :label="r.label"
                        :variant="selectedRegion === r.value ? 'solid' : 'outline'"
                        :color="selectedRegion === r.value ? 'primary' : 'neutral'" size="md" block
                        @click="selectRegion(r.value)" />
                </div>
            </div>

            <UButton :label="$t('trivia.startGame')" icon="i-lucide-play" size="xl" @click="startGame" />
        </div>

        <!-- Loading -->
        <div v-else-if="loading" class="flex flex-col items-center justify-center h-full">
            <UIcon name="i-lucide-loader-2" class="text-5xl animate-spin text-primary mb-4" />
            <p class="text-gray-400 text-lg">
                {{ $t('trivia.loading') }}
            </p>
        </div>

        <!-- Game -->
        <div v-else-if="pokemon" class="flex flex-col h-full px-4">
            <!-- Header: Round, Score & Timer (fixed top) -->
            <div class="sticky top-0 z-10 bg-default pb-2 pt-2 shrink-0">
                <div class="flex items-center justify-between mb-2">
                    <UBadge color="neutral" variant="subtle" size="lg">
                        {{ $t('trivia.round', { n: round }) }}
                    </UBadge>
                    <UBadge color="primary" variant="subtle" size="lg">
                        {{ $t('trivia.score', { score, total: round - (answered ? 0 : 1) }) }}
                    </UBadge>
                </div>
                <TriviaTimer v-if="!answered" :time-left="timeLeft" :max-time="TIMER_DURATION" />
            </div>

            <!-- Game Content: Side by Side -->
            <div
                class="flex flex-col md:flex-row gap-4 md:gap-10 items-center justify-center flex-1 min-h-0 mt-2 md:-mt-8 pb-4">
                <!-- Left: Pokemon Display -->
                <div class="text-center shrink-0">
                    <h2 class="text-xl sm:text-2xl font-bold">
                        {{ getPokemonName() }}
                    </h2>
                    <p class="text-xs text-gray-500 mb-2">
                        #{{ String(pokemon.id).padStart(3, '0') }}
                    </p>
                    <img :src="getPokemonImage()" :alt="getPokemonName()"
                        class="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 object-contain mx-auto drop-shadow-2xl">
                </div>

                <!-- Right: Type Selection + Submit -->
                <div class="flex flex-col items-center md:items-start">
                    <p class="text-xs text-gray-400 mb-2">
                        {{ answered ? $t('trivia.results') : $t('trivia.selectTypes') }}
                    </p>
                    <div class="options-grid">
                        <TypeButton v-for="tp in optionTypes" :key="tp" :type="tp"
                            :selected="selectedTypes.includes(tp)" :show-result="answered"
                            :is-correct-type="correctTypes.includes(tp)" @click="toggleType" />
                    </div>

                    <!-- Submit Button -->
                    <div v-if="!answered" class="mt-4">
                        <UButton :label="$t('trivia.confirmAnswer')" icon="i-lucide-check" size="lg"
                            :disabled="selectedTypes.length === 0" @click="submitAnswer" />
                    </div>
                </div>
            </div>

            <!-- Result (overlay notification) -->
            <TriviaResult v-if="answered" :is-correct="isCorrect" :timed-out="timedOut" :correct-types="correctTypes"
                :selected-types="selectedTypes" :pokemon-name="getPokemonName()" :score="score" :round="round"
                @next="nextRound" />
        </div>
    </div>
</template>

<style scoped>
.trivia-page {
    height: calc(100vh - 4rem);
    height: calc(100dvh - 4rem);
    max-width: 64rem;
    margin: 0 auto;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
}

.options-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
}

@media (max-width: 639px) {
    .options-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
