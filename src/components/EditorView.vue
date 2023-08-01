<script setup lang="ts">
import { ref, watch } from 'vue'

import { useDbStore } from '@/stores/db'
import ActionMenu from '@/components/ActionMenu.vue'
import QuerySelector from './QuerySelector.vue'
import { storeToRefs } from 'pinia'

const dbStore = useDbStore()
const { setTypedQuery } = dbStore
const { typedQuery, searchedQuery, currentTable } = storeToRefs(dbStore)

const editorRef = ref('')
watch(
  () => editorRef.value,
  () => {
    setTypedQuery(editorRef.value)
  }
)

watch(
  () => typedQuery.value,
  () => {
    editorRef.value = typedQuery.value
  }
)

watch(
  () => searchedQuery.value,
  () => {
    editorRef.value = searchedQuery.value
  }
)

watch(
  () => currentTable.value,
  () => {
    editorRef.value = ''
    setTypedQuery('')
  }
)
</script>

<template>
  <div class="h-full relative">
    <ActionMenu />
    <div class="mockup-code h-full rounded-none">
      <QuerySelector />
      <textarea
        class="px-20 textarea bg-transparent w-full h-full focus:bg-transparent rounded-none text-white"
        placeholder="Enter your query here..."
        v-model="editorRef"
      ></textarea>
    </div>
  </div>
</template>
