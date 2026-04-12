export type PaginationMetaWrapper <T> = {
  meta: PaginationMeta
  data: T[]
}

export type PaginationMeta = {
  isFirstPage: boolean,
  isLastPage: boolean,
  currentPage: number
  previousPage: number,
  pageCount: number,
  totalCount: number,
  nextPage: number
}