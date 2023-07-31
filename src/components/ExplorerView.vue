<script setup lang="ts">
import { CircleStackIcon, DocumentIcon } from '@heroicons/vue/24/solid'
import type { ITable } from '@/types'
import { tables } from '@/db/tables'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()

const onTableClick = (table: ITable) => {
  router.push({
    query: {
      table: table.key
    }
  })
}

const currentTable = computed(() => {
  const tableKey = (router?.currentRoute?.value?.query?.table as string) || ''
  return tables.find((table) => table.key === tableKey)
})
</script>

<template>
  <ul class="menu menu-xs bg-base-200 rounded-lg w-full h-full tracking-wider">
    <li>
      <details open>
        <summary>
          <CircleStackIcon class="h-4 w-4" />
          <span class="font-bold text-sm">Data Sources</span>
        </summary>
        <ul>
          <li
            v-for="(table, idx) in tables"
            :key="`table-${idx + 1}-${table.key}`"
            @click="onTableClick(table)"
          >
            <span
              :class="{
                active: currentTable?.key === table.key
              }"
            >
              <DocumentIcon class="h-4 w-4" />
              {{ table.name }}
            </span>
          </li>
        </ul>
      </details>
    </li>
  </ul>
</template>
