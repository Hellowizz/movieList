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

const CategoryButton = ({title, handleClick, isSelected}) => {
  return (
    <div
      className="category-button-container"
      onClick={handleClick}
      style={isSelected ? styles.selectedStyle : styles.unselectedStyle}
    >
      {title}
    </div>
  );
};

CategoryButton.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
}

export default CategoryButton
