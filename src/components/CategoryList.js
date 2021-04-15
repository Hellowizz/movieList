import React from 'react'
import PropTypes from 'prop-types'
import CategoryButton from './CategoryButton'

const CategoryList = ({ categories, selectCategory, selectedCategories }) => {
  const CategoriesComponent = categories.map( (cat, id) => {
    let findId = -1;
    if (selectedCategories !== undefined) {
      findId = selectedCategories.findIndex(catSelected => catSelected === cat);
    }
    return (<CategoryButton
      key={id}
      title={cat}
      handleClick={() => selectCategory(cat)}
      isSelected={findId !== -1}
    />)
  })
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '25px 0' }}>
      {CategoriesComponent}
    </div>
  )
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string.isRequired,).isRequired,
  selectCategory: PropTypes.func.isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.string.isRequired,).isRequired
}

export default CategoryList
