<script setup lang="ts">
import { CircleStackIcon, DocumentIcon } from '@heroicons/vue/24/solid'
import type { ITable } from '@/types'
import { tables } from '@/tables'
import { useRouter } from 'vue-router'
import { useDbStore } from '@/stores/db'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const router = useRouter()

const dbStore = useDbStore()
const { setCurrentTable } = dbStore
const { currentTable } = storeToRefs(dbStore)

onMounted(() => {
  if (!currentTable.value) {
    const tableKey = (router?.currentRoute?.value?.query?.table as string) || ''
    setCurrentTable(tableKey)
  }
})

const onTableClick = (table: ITable) => {
  const tableKey = table.key
  setCurrentTable(tableKey)
  router.push({
    query: {
      table: tableKey
    }
  })
}
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
                active: currentTable === table.key
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
