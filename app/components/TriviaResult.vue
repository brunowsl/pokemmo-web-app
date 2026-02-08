<script setup lang="ts">
import type { PokemonTypeName } from '~/types/pokemon'
import { TYPE_COLORS } from '~/types/pokemon'

defineProps<{
    isCorrect: boolean
    timedOut: boolean
    correctTypes: PokemonTypeName[]
    selectedTypes: PokemonTypeName[]
    pokemonName: string
    score: number
    round: number
}>()

const emit = defineEmits<{
    next: []
}>()

const typeLabel = (t: PokemonTypeName) => t.charAt(0).toUpperCase() + t.slice(1)
</script>

<template>
    <Teleport to="body">
        <Transition name="fade">
            <div v-show="true" class="result-overlay">
                <div class="result-card" :class="isCorrect ? 'result-card--correct' : 'result-card--incorrect'">
                    <div class="text-3xl mb-2">
                        {{ timedOut ? '⏰' : isCorrect ? '🎉' : '❌' }}
                    </div>

                    <h3 class="text-lg font-bold mb-1" :class="isCorrect ? 'text-green-400' : 'text-red-400'">
                        {{ timedOut ? $t('trivia.timesUp') : isCorrect ? $t('trivia.correct') : $t('trivia.incorrect')
                        }}
                    </h3>

                    <p class="text-gray-400 text-sm mb-3">
                        {{ $t('trivia.pokemonIs', { name: pokemonName }) }}
                    </p>

                    <div class="flex flex-wrap justify-center gap-1.5 mb-3">
                        <span v-for="t in correctTypes" :key="t"
                            class="px-2.5 py-0.5 rounded-full text-xs font-bold text-white"
                            :style="{ backgroundColor: TYPE_COLORS[t] }">
                            {{ typeLabel(t) }}
                        </span>
                    </div>

                    <p class="text-xs text-gray-500 mb-3">
                        {{ $t('trivia.score', { score, total: round }) }}
                    </p>

                    <UButton :label="$t('trivia.nextPokemon')" icon="i-lucide-arrow-right" size="md"
                        @click="emit('next')" />
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.result-overlay {
    position: fixed;
    inset: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    padding: 1rem;
}

.result-card {
    text-align: center;
    padding: 1.25rem 1.5rem;
    border-radius: 1rem;
    border: 1px solid;
    max-width: 22rem;
    width: 100%;
    animation: slideUp 0.3s ease-out;
}

@media (min-width: 640px) {
    .result-card {
        padding: 1.5rem 2rem;
    }
}

.result-card--correct {
    background-color: rgba(34, 197, 94, 0.08);
    border-color: rgba(34, 197, 94, 0.3);
}

.result-card--incorrect {
    background-color: rgba(239, 68, 68, 0.08);
    border-color: rgba(239, 68, 68, 0.3);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

@keyframes slideUp {
    from {
        transform: translateY(20px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>
