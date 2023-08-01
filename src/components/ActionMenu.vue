<script setup lang="ts">
import { useDbStore } from '@/stores/db'
import { PlayIcon } from '@heroicons/vue/24/solid'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const dbStore = useDbStore()
const { executeQuery } = dbStore
const { currentTable, isLoading } = storeToRefs(dbStore)

const isDisabled = computed(() => {
  return !currentTable.value || isLoading.value || false
})

const handleQueryExecution = () => {
  executeQuery()
}
</script>

<template>
  <ul class="menu bg-base-200 rounded-box absolute z-10 shadow-lg top-28 -left-[30px]">
    <div class="tooltip" data-tip="Execute Query">
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
