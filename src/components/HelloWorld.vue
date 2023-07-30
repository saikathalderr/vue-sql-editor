<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div>
    <h1 class="text-purple-800">{{ msg }}</h1>
  </div>
</template>
