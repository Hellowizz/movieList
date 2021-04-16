export const deleteMovie = id => ({
  type: 'DELETE_MOVIE',
  id
})

export const selectCategory = catName => ({
  type: 'SELECT_CATEGORY',
  catName
})

export const toggleLikes = () => ({
  type: 'TOGGLE_LIKES'
})

export const changePagesNumber = pagesNumber => ({
  type: 'CHANGE_NUMBER_OF_PAGES',
  pagesNumber
})

export const changeCurrentPage = page => ({
  type: 'CHANGE_ACTIVE_PAGE',
  page
})

export const VisibilityFilters = {
  DELETE_MOVIE: 'DELETE_MOVIE',
  SELECT_CATEGORY: 'SELECT_CATEGORY',
  TOGGLE_LIKES: 'TOGGLE_LIKES',
  CHANGE_NUMBER_OF_PAGES: 'CHANGE_NUMBER_OF_PAGES',
  CHANGE_ACTIVE_PAGE: 'CHANGE_ACTIVE_PAGE'
}
