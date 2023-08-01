import { _getJsonFromCsv } from '@/utils'
import { defineStore } from 'pinia'

type DBState = {
  currentTable: string
  currentTableData: unknown[]
  loading: boolean | null
}

export const useDbStore = defineStore('db', {
  state: (): DBState => ({
    currentTable: '',
    currentTableData: [],
    loading: null
  }),
  getters: {
    getCurrentTableData: (state) => state.currentTableData,
    getCurrentTable: (state) => state.currentTable,
    isLoading: (state) => state.loading
  },
  actions: {
    setCurrentTableData(data: unknown[]) {
      this.currentTableData = data
    },
    setCurrentTable(table: string) {
      this.currentTable = table
    },
    async executeQuery() {
      if (!this.currentTable) return
      this.setLoading(true)
      const data = await _getJsonFromCsv(this.currentTable)
      this.setCurrentTableData(data)
      this.setLoading(false)
    },
    setLoading(loading: boolean) {
      this.loading = loading
    }
  }
})
