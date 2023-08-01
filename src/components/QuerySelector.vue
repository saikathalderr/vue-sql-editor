<script setup lang="ts">
import { type TQuery, queries } from '@/queries'
import { useDbStore } from '@/stores/db'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'

const dbStore = useDbStore()
const { currentTable } = storeToRefs(dbStore)
const { setTypedQuery } = dbStore
const options = ref<TQuery[]>([])
const selectElement = ref<HTMLSelectElement | null>(null)

const handleQueryChange = (e: Event) => {
  const target = e.target as HTMLSelectElement
  const query = target.value
  setTypedQuery(query)
}

const resetSelect = () => {
  if (selectElement.value) {
    selectElement.value.selectedIndex = 0
  }
}

watch(
  () => currentTable.value,
  () => {
    if (currentTable.value.length) {
      resetSelect()
      const queriesMap = queries.map((query: TQuery) => {
        return {
          text: query.text.replace(/{{table}}/g, currentTable.value),
          query: query.query.replace(/{{table}}/g, currentTable.value)
        }
      })
      options.value = queriesMap
    }
  },
  { immediate: true }
)
</script>

<template>
  <select
    ref="selectElement"
    @change="handleQueryChange"
    class="select select-sm absolute right-5 top-5 bg-neutral text-neutral-content border-neutral-content"
  >
    <option selected disabled>Select a query</option>
    <option v-for="(option, idx) in options" :key="'query-option-' + idx + 1" :value="option.query">
      {{ option.text }}
    </option>
  </select>
</template>
