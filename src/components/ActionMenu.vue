<script setup lang="ts">
import { useDbStore } from '@/stores/db'
import { PlayIcon } from '@heroicons/vue/24/solid'
import { storeToRefs } from 'pinia'
import { computed, onMounted } from 'vue'

const dbStore = useDbStore()
const { executeQuery } = dbStore
const { currentTable, isLoading, getTypedQuery, searchedQuery } = storeToRefs(dbStore)

const isDisabled = computed(() => {
  return !currentTable.value || isLoading.value || !getTypedQuery.value || false
})

const handleQueryExecution = () => {
  executeQuery()
}

onMounted(() => {
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.shiftKey && e.key === 'Enter' && !isDisabled.value) {
      handleQueryExecution()
    }
  })
})

const isDifferentQuery = computed(() => {
  return getTypedQuery.value && searchedQuery.value && getTypedQuery.value !== searchedQuery.value
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
  <ul class="menu bg-base-200 rounded-box absolute z-10 shadow-lg top-28 -left-[20px]">
    <div class="tooltip" :data-tip="tooltipLabel">
      <li>
        <button
          @click="handleQueryExecution"
          class="btn btn-sm relative w-7 h-7"
          :disabled="isDisabled"
        >
          <PlayIcon
            :class="isDisabled ? 'h-3 w-3 text-neutral opacity-50' : 'h-3 w-3 text-red-500'"
          />
          <span
            v-if="isDifferentQuery"
            class="w-[5px] h-[5px] bg-green-600 rounded-full absolute bottom-[7px] left-[12px]"
          ></span>
        </button>
      </li>
    </div>
  </ul>
</template>
