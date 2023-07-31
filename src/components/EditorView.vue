<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const currentTable = computed(() => {
  const tableKey = (router?.currentRoute?.value?.query?.table as string) || ''
  return tableKey
})
const prePopulatedQuery = computed(() => {
  return `SELECT * FROM ${currentTable.value}`.trim()
})
</script>

<template>
  <div class="mockup-code h-full rounded-none">
    <textarea
      class="px-20 textarea bg-transparent w-full h-full focus:bg-transparent rounded-none text-white"
      placeholder="Enter your query here..."
      :value="prePopulatedQuery"
    ></textarea>
  </div>
</template>
