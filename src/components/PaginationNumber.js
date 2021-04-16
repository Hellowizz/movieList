import React from 'react';
import PropTypes from 'prop-types';

import './MovieCard.css';

const styles = {
  selectedStyle : {
    color: 'white',
    backgroundColor: 'black'
  },
  unselectedStyle : {
    color: 'black',
    backgroundColor: 'white'
  }
}

const PaginationNumber = ({number, isActive, handleClick}) => {

  return (
    <div
      onClick={handleClick}
      className="page-number-container"
      style={isActive ? styles.selectedStyle : styles.unselectedStyle}
    >
      {number}
    </div>
  );
};

PaginationNumber.propTypes = {
  number: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default PaginationNumber
