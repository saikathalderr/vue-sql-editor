<script setup lang="ts">
import { useDbStore } from '@/stores/db'
import { PlayIcon } from '@heroicons/vue/24/solid'
import { storeToRefs } from 'pinia'
import { computed, onMounted } from 'vue'

const dbStore = useDbStore()
const { executeQuery } = dbStore
const { currentTable, isLoading } = storeToRefs(dbStore)

const isDisabled = computed(() => {
  return !currentTable.value || isLoading.value || false
})

const handleQueryExecution = () => {
  executeQuery()
}

onMounted(() => {
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.shiftKey && e.key === 'Enter') {
      handleQueryExecution()
    }
  })
})

const shortcutLabel = computed(() => {
  return isDisabled.value ? '⇧ + Enter' : 'Shift + Enter'
})

const tooltipLabel = computed(() => {
  return isDisabled.value
    ? `Please select a table first`
    : `Execute query - (${shortcutLabel.value})`
})
</script>

<template>
  <ul class="menu bg-base-200 rounded-box absolute z-10 shadow-lg top-28 -left-[30px]">
    <div class="tooltip" :data-tip="tooltipLabel">
      <li>
        <button @click="handleQueryExecution" class="btn btn-sm" :disabled="isDisabled">
          <PlayIcon
            :class="
              isDisabled ? 'h-full w-full text-neutral opacity-50' : 'h-full w-full text-red-500'
            "
          />
        </button>
      </li>
    </div>
  </ul>
</template>
