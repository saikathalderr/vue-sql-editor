import { _getJsonFromCsv } from '@/utils'
import { defineStore } from 'pinia'

type DBState = {
  currentTable: string
  currentTableData: unknown[]
  loading: boolean | null
  searchedQuery: string
  typedQuery: string
}

export const useDbStore = defineStore('db', {
  state: (): DBState => ({
    currentTable: '',
    currentTableData: [],
    loading: null,
    searchedQuery: '',
    typedQuery: ''
  }),
  getters: {
    getCurrentTableData: (state) => state.currentTableData,
    getCurrentTable: (state) => state.currentTable,
    isLoading: (state) => state.loading,
    getSearchedQuery: (state) => state.searchedQuery,
    getTypedQuery: (state) => state.typedQuery
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
      const data = await _getJsonFromCsv(this.currentTable, this.typedQuery)
      this.setCurrentTableData(data)
      this.setSearchedQuery(this.typedQuery)
      this.setLoading(false)
    },
    setLoading(loading: boolean) {
      this.loading = loading
    },
    setSearchedQuery(query: string) {
      this.searchedQuery = query
    },
    setTypedQuery(query: string) {
      this.typedQuery = query
    }
  }
})
