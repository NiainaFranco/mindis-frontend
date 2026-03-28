export type PaginationMetaWrapper <T> = {
  meta: PaginationMeta
  data: T[]
}

export type PaginationMeta = {
  isFirstPage: boolean,
  isLastPage: boolean,
  currentPage: number
  previousPage: number,
  nextPage: number
}