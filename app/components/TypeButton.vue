<script setup lang="ts">
import type { PokemonTypeName } from '~/types/pokemon'
import { getTypeIconUrl } from '~/types/pokemon'

const props = defineProps<{
  type: PokemonTypeName
  selected: boolean
  showResult: boolean
  isCorrectType: boolean
}>()

const iconUrl = computed(() => getTypeIconUrl(props.type))

const emit = defineEmits<{
  click: [type: PokemonTypeName]
}>()

const borderStyle = computed(() => {
  if (props.showResult) {
    if (props.isCorrectType) {
      return {
        borderColor: '#22c55e',
        boxShadow: '0 0 0 3px rgba(34, 197, 94, 0.5)',
        opacity: 1
      }
    }
    if (props.selected && !props.isCorrectType) {
      return {
        borderColor: '#ef4444',
        boxShadow: '0 0 0 3px rgba(239, 68, 68, 0.4)',
        opacity: 0.8
      }
    }
    return {
      borderColor: 'transparent',
      opacity: 0.4
    }
  }

  if (props.selected) {
    return {
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.4)'
    }
  }

  return {
    borderColor: 'transparent'
  }
})
</script>

<template>
  <button
    class="type-button"
    :style="borderStyle"
    :disabled="showResult"
    @click="emit('click', type)"
  >
    <img
      :src="iconUrl"
      :alt="type"
      class="type-img"
    >
  </button>
</template>

<style scoped>
.type-button {
  padding: 3px;
  border-radius: 0.5rem;
  border: 3px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  background: transparent;
}

.type-img {
  display: block;
  height: 1.75rem;
  width: auto;
  object-fit: contain;
}

@media (min-width: 640px) {
  .type-img {
    height: 2rem;
  }
}

@media (min-width: 768px) {
  .type-img {
    height: 2.25rem;
  }
}

.type-button:not(:disabled):hover {
  transform: scale(1.08);
}

.type-button:disabled {
  cursor: default;
}
</style>
