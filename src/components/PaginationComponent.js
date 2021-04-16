import React from 'react'
import PropTypes from 'prop-types'
import PaginationNumber from './PaginationNumber'

const PaginationComponent = ({ numberOfPages, currentPage, changeCurrentPage }) => {
  const pagination = [];
  for (let i = 1; i <= numberOfPages; i++) {
    const page =
      <PaginationNumber
        number={i}
        isActive={i === currentPage}
        handleClick={() => changeCurrentPage(i)}
        key={i}
      />
    pagination.push(page);
  }
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '25px 0' }}>
      {pagination}
    </div>
  )
}

PaginationComponent.propTypes = {
  numberOfPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  changeCurrentPage: PropTypes.func.isRequired
}

export default PaginationComponent
