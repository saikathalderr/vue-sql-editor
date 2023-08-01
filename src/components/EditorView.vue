<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import ActionMenu from '@/components/ActionMenu.vue'
import { useDbStore } from '@/stores/db'
import { storeToRefs } from 'pinia'

const dbStore = useDbStore()
const { currentTable } = storeToRefs(dbStore)

const prePopulatedQuery = computed(() => {
  return `SELECT * FROM ${currentTable.value}`.trim()
})
const editorRef = ref('')

watch(
  () => currentTable.value,
  () => {
    if (currentTable.value.length) editorRef.value = prePopulatedQuery.value
  }
)
</script>

<template>
  <div class="h-full">
    <ActionMenu />
    <div class="mockup-code h-full rounded-none">
      <textarea
        class="px-20 textarea bg-transparent w-full h-full focus:bg-transparent rounded-none text-white"
        placeholder="Enter your query here..."
        v-model="editorRef"
      ></textarea>
    </div>
  </div>
</template>
