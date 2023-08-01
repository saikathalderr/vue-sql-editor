<script setup lang="ts">
import EditorView from '@/components/EditorView.vue'
import ResultsView from '@/components/ResultsView.vue'
import ExplorerView from '@/components/ExplorerView.vue'
</script>

<template>
  <main>
    <div class="flex h-screen">
      <div class="min-w-[250px] h-full">
        <ExplorerView />
      </div>
      <div class="h-full w-full flex flex-col relative">
        <div class="h-1/4">
          <EditorView />
        </div>
        <div class="px-10 py-5 overflow-auto">
          <ResultsView />
        </div>
      </div>
    </div>
  </main>
</template>
