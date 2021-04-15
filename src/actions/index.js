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

export const VisibilityFilters = {
  DELETE_MOVIE: 'DELETE_MOVIE',
  SELECT_CATEGORY: 'SELECT_CATEGORY',
  TOGGLE_LIKES: 'TOGGLE_LIKES'
}
