import React from 'react'
import { Pagination } from 'react-bootstrap'

const PaginationComp = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = []

  for (let i = 0; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <div>
      <Pagination as='ul'>
        {pageNumbers.map((page) => (
          <Pagination.Item as='li' key={page}>
            <a href='!#' onClick={() => paginate(page)}>
              {page}
            </a>
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  )
}

export default PaginationComp
