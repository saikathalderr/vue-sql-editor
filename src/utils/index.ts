import Papa from 'papaparse'

export async function _fetchCsv(table: string) {
  const response = await fetch(`db/data/${table}.csv`)
  const reader = response.body?.getReader()
  const result = await reader?.read()
  const decoder = new TextDecoder('utf-8')
  const csv = await decoder.decode(result?.value)
  return csv
}

export async function _getJsonFromCsv(table: string, query: string) {
  const data = Papa.parse(await _fetchCsv(table))
  if (query.includes('WHERE id')) return data.data.slice(0, 2) // This is Dummy, actually should be a query engine
  return data.data
}
