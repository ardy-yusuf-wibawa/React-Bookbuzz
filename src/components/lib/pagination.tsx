import React from 'react'

interface Props {
  currentPage: number
  totalPages: number
  onPageChange: (pageNumber: number) => void
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange
}: Props): React.ReactElement {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  )

  const handlePageClick = (
    pageNumber: number
  ): void => {
    onPageChange(pageNumber)
  }

  return (
    <ul className='inline-flex -space-x-px'>
      {pageNumbers.map((pageNumber) => (
        <li
          key={pageNumber}
          className={`px-3 py-2 rounded-md cursor-pointer ${
            pageNumber === currentPage
              ? ' text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700  '
              : ' leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 '
          }`}
          onClick={() => {
            handlePageClick(pageNumber)
          }}>
          {pageNumber}
        </li>
      ))}
    </ul>
  )
}

export default Pagination
