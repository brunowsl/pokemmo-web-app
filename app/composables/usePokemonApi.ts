import type { Pokemon, PokemonSpecies } from '~/types/pokemon'

export type RegionName = 'kanto' | 'johto' | 'hoenn' | 'sinnoh' | 'unova' | 'all'

const POKEAPI_BASE = 'https://pokeapi.co/api/v2'

// Pokemon ID ranges per region
const REGION_RANGES: Record<string, [number, number]> = {
  kanto: [1, 151],
  johto: [152, 251],
  hoenn: [252, 386],
  sinnoh: [387, 493],
  unova: [494, 649]
}

function getRegionIds(region: RegionName): number[] {
  if (region === 'all') {
    const ids: number[] = []
    for (const [start, end] of Object.values(REGION_RANGES)) {
      for (let i = start; i <= end; i++) {
        ids.push(i)
      }
    }
    return ids
  }
  const [start, end] = REGION_RANGES[region]!
  const ids: number[] = []
  for (let i = start; i <= end; i++) {
    ids.push(i)
  }
  return ids
}

export function usePokemonApi() {
  async function fetchPokemon(idOrName: number | string): Promise<Pokemon> {
    const data = await $fetch<Pokemon>(`${POKEAPI_BASE}/pokemon/${idOrName}`)
    return data
  }

  async function fetchPokemonSpecies(id: number): Promise<PokemonSpecies> {
    const data = await $fetch<PokemonSpecies>(`${POKEAPI_BASE}/pokemon-species/${id}`)
    return data
  }

  function getRandomPokemonIdForRegion(region: RegionName): number {
    const ids = getRegionIds(region)
    return ids[Math.floor(Math.random() * ids.length)]!
  }

  async function fetchRandomPokemon(region: RegionName = 'all'): Promise<Pokemon> {
    const id = getRandomPokemonIdForRegion(region)
    return fetchPokemon(id)
  }

  function getPokemonImageUrl(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  }

  return {
    fetchPokemon,
    fetchPokemonSpecies,
    fetchRandomPokemon,
    getRandomPokemonIdForRegion,
    getPokemonImageUrl,
    REGION_RANGES
  }
}
