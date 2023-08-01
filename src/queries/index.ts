export type TQuery = {
  text: string
  query: string
}
export const GET_ALL = {
  text: 'Get everything from {{table}}',
  query: 'SELECT * FROM {{table}}'
}
export const GET_BY_ID = {
  text: 'Get {{table}} by id',
  query: 'SELECT * FROM {{table}} WHERE id = $1'
}

export const queries: TQuery[] = [GET_ALL, GET_BY_ID]
