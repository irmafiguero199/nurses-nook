import { useState } from 'react'

export function usePagination(items, itemsPerPage = 10) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(items.length / itemsPerPage)
  const paginatedItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
  return { currentPage, setCurrentPage, totalPages, paginatedItems }
}