import type { Pokemon, PokemonTypeName } from '~/types/pokemon'
import type { RegionName } from '~/composables/usePokemonApi'
import { POKEMON_TYPES, getTypeIconUrl } from '~/types/pokemon'

export interface TriviaState {
  pokemon: Pokemon | null
  selectedTypes: PokemonTypeName[]
  correctTypes: PokemonTypeName[]
  optionTypes: PokemonTypeName[]
  answered: boolean
  isCorrect: boolean
  timeLeft: number
  timedOut: boolean
  score: number
  round: number
  loading: boolean
}

const TIMER_DURATION = 30

export function usePokeTypeTrivia() {
  const { fetchRandomPokemon, getPokemonImageUrl } = usePokemonApi()

  const selectedRegion = ref<RegionName>('all')

  const state = reactive<TriviaState>({
    pokemon: null,
    selectedTypes: [],
    correctTypes: [],
    optionTypes: [],
    answered: false,
    isCorrect: false,
    timeLeft: TIMER_DURATION,
    timedOut: false,
    score: 0,
    round: 0,
    loading: false
  })

  let timerInterval: ReturnType<typeof setInterval> | null = null

  function startTimer() {
    stopTimer()
    state.timeLeft = TIMER_DURATION
    timerInterval = setInterval(() => {
      state.timeLeft--
      if (state.timeLeft <= 0) {
        stopTimer()
        handleTimeout()
      }
    }, 1000)
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval)
      timerInterval = null
    }
  }

  function handleTimeout() {
    state.timedOut = true
    state.answered = true
    state.isCorrect = false
  }

  const TOTAL_OPTIONS = 6

  function generateOptions(correctTypes: PokemonTypeName[]): PokemonTypeName[] {
    // Ensure we only use valid types from our known list
    const validCorrectTypes = correctTypes.filter(t =>
      (POKEMON_TYPES as readonly string[]).includes(t)
    )

    // If no valid correct types, fallback to 'normal'
    if (validCorrectTypes.length === 0) {
      validCorrectTypes.push('normal')
    }

    const wrongTypes = POKEMON_TYPES.filter(t => !validCorrectTypes.includes(t))
    const shuffled = [...wrongTypes].sort(() => Math.random() - 0.5)
    const fillCount = Math.max(0, TOTAL_OPTIONS - validCorrectTypes.length)
    const fillers = shuffled.slice(0, fillCount)
    const options = [...validCorrectTypes, ...fillers].sort(() => Math.random() - 0.5)

    // Safety check: ensure all correct types are in the options
    for (const ct of validCorrectTypes) {
      if (!options.includes(ct)) {
        options.pop()
        options.push(ct)
      }
    }

    return options
  }

  function toggleType(type: PokemonTypeName) {
    if (state.answered) return

    const index = state.selectedTypes.indexOf(type)
    if (index === -1) {
      state.selectedTypes.push(type)
    } else {
      state.selectedTypes.splice(index, 1)
    }
  }

  function submitAnswer() {
    if (state.answered || state.selectedTypes.length === 0) return

    stopTimer()
    state.answered = true

    const correct = state.correctTypes.slice().sort()
    const selected = state.selectedTypes.slice().sort()

    state.isCorrect = correct.length === selected.length && correct.every((t, i) => t === selected[i])
    if (state.isCorrect) {
      state.score++
    }
  }

  function preloadImage(src: string): Promise<void> {
    return new Promise((resolve) => {
      const img = new Image()
      img.onload = () => resolve()
      img.onerror = () => resolve()
      img.src = src
    })
  }

  async function preloadAllImages(pokemonId: number, options: PokemonTypeName[]): Promise<void> {
    const urls = [
      getPokemonImageUrl(pokemonId),
      ...options.map(t => getTypeIconUrl(t))
    ]
    await Promise.all(urls.map(preloadImage))
  }

  async function nextRound() {
    state.loading = true
    state.selectedTypes = []
    state.answered = false
    state.isCorrect = false
    state.timedOut = false
    state.optionTypes = []
    state.round++

    try {
      const pokemon = await fetchRandomPokemon(selectedRegion.value)
      state.pokemon = pokemon

      // Extract and validate correct types against our known type list
      const rawTypes = pokemon.types.map(t => t.type.name as PokemonTypeName)
      state.correctTypes = rawTypes.filter(t =>
        (POKEMON_TYPES as readonly string[]).includes(t)
      )

      // Fallback if pokemon has no recognized types
      if (state.correctTypes.length === 0) {
        state.correctTypes = ['normal']
      }

      state.optionTypes = generateOptions(state.correctTypes)
      await preloadAllImages(pokemon.id, state.optionTypes)
    } catch (error) {
      console.error('Failed to fetch pokemon:', error)
    } finally {
      state.loading = false
      startTimer()
    }
  }

  function setRegion(region: RegionName) {
    selectedRegion.value = region
  }

  function resetGame() {
    stopTimer()
    state.pokemon = null
    state.selectedTypes = []
    state.correctTypes = []
    state.optionTypes = []
    state.answered = false
    state.isCorrect = false
    state.timeLeft = TIMER_DURATION
    state.timedOut = false
    state.score = 0
    state.round = 0
    state.loading = false
  }

  function getPokemonImage(): string {
    if (!state.pokemon) return ''
    return getPokemonImageUrl(state.pokemon.id)
  }

  function getPokemonName(): string {
    if (!state.pokemon) return ''
    return state.pokemon.name.charAt(0).toUpperCase() + state.pokemon.name.slice(1)
  }

  onUnmounted(() => {
    stopTimer()
  })

  return {
    state: toRefs(state),
    selectedRegion,
    setRegion,
    toggleType,
    submitAnswer,
    nextRound,
    resetGame,
    getPokemonImage,
    getPokemonName,
    TIMER_DURATION
  }
}
