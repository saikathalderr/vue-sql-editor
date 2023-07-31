<script setup lang="ts">
import { PlayIcon, ArrowPathRoundedSquareIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <ul class="menu bg-base-200 rounded-box absolute z-10 shadow-lg top-20 -left-[30px]">
    <li>
      <a>
        <div class="tooltip" data-tip="Execute Query">
          <PlayIcon class="h-5 w-5 text-red-500" />
        </div>
      </a>
    </li>
    <li>
      <a>
        <div
          class="tooltip"
          data-tip="
            Re-Execute Previous Query
        "
        >
          <ArrowPathRoundedSquareIcon class="h-5 w-5 text-green-500" />
        </div>
      </a>
    </li>
  </ul>
</template>
