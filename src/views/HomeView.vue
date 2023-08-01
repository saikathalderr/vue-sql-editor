<script setup lang="ts">
import EditorView from '@/components/EditorView.vue'
import ResultsView from '@/components/ResultsView.vue'
import ExplorerView from '@/components/ExplorerView.vue'
</script>

<template>
  <main class="h-screen mx-auto">
    <div class="grid grid-cols-12 h-full">
      <div class="col-span-2">
        <ExplorerView />
      </div>
      <div class="col-span-10 flex flex-col">
        <div class="h-[250px]">
          <EditorView />
        </div>
        <div class="overflow-auto p-5">
          <ResultsView />
        </div>
      </div>
    </div>
  </main>
</template>
