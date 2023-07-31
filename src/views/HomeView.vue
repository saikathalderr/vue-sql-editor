<script setup lang="ts">
import EditorView from '@/components/EditorView.vue'
import ExplorerView from '@/components/ExplorerView.vue'
import ResultsView from '@/components/ResultsView.vue'
import ActionMene from '@/components/ActionMenu.vue'
</script>

<template>
  <main>
    <div class="flex h-screen">
      <div class="w-[350px] h-full">
        <ExplorerView />
      </div>
      <div class="h-full flex-1 flex flex-col relative">
        <ActionMene />
        <div class="flex-1">
          <EditorView />
        </div>
        <div class="p-5">
          <ResultsView />
        </div>
      </div>
    </div>
  </main>
</template>
