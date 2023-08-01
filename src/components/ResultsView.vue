<script setup lang="ts">
import EmptyResults from '@/components/EmptyResults.vue'

import { useDbStore } from '@/stores/db'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const dbStore = useDbStore()
const { currentTableData, isLoading } = storeToRefs(dbStore)

const headers = computed(() => {
  const keys = currentTableData.value[0]
  return keys
})

const data = computed(() => {
  const rows = currentTableData.value.slice(1)
  return rows
})
</script>

<template>
  <div class="flex justify-center items-center h-full" v-if="isLoading">
    <div class="flex flex-col justify-center items-center">
      <span class="loading loading-bars loading-lg"></span>
      <span>Loading...</span>
    </div>
  </div>
  <table class="table table-xs" v-else-if="isLoading === false">
    <thead>
      <tr class="bg-neutral-content text-neutral sticky -top-6">
        <th
          v-for="(header, idx) in headers"
          :key="'header-' + idx + 1"
          class="border-2 border-neutral-focus"
        >
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="even:bg-base-100 odd:bg-base-200"
        v-for="(row, idx) in data"
        :key="'row-' + idx + 1"
      >
        <td
          class="max-w-[100px] truncate hover:bg-neutral-content hover:text-neutral"
          v-for="(cell, idx) in row"
          :key="'cell-' + idx + 1"
        >
          {{ cell }}
        </td>
      </tr>
    </tbody>
  </table>
  <EmptyResults v-else />
</template>
