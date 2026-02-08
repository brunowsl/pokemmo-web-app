<script setup lang="ts">
const props = defineProps<{
  timeLeft: number
  maxTime: number
}>()

const percentage = computed(() => (props.timeLeft / props.maxTime) * 100)

const timerColor = computed(() => {
  if (props.timeLeft > 20) return 'text-green-400'
  if (props.timeLeft > 10) return 'text-yellow-400'
  return 'text-red-400'
})

const barColor = computed(() => {
  if (props.timeLeft > 20) return 'bg-green-500'
  if (props.timeLeft > 10) return 'bg-yellow-500'
  return 'bg-red-500'
})

const isPulsing = computed(() => props.timeLeft <= 5 && props.timeLeft > 0)
</script>

<template>
  <div class="timer-container">
    <div class="flex items-center justify-between mb-2">
      <span class="text-sm text-gray-400 uppercase tracking-wider font-semibold">Time</span>
      <span
        class="text-2xl font-bold tabular-nums transition-colors duration-300"
        :class="[timerColor, { 'animate-pulse': isPulsing }]"
      >
        {{ timeLeft }}s
      </span>
    </div>
    <div class="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
      <div
        class="h-full rounded-full transition-all duration-1000 ease-linear"
        :class="barColor"
        :style="{ width: `${percentage}%` }"
      />
    </div>
  </div>
</template>
