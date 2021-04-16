import { connect } from 'react-redux'
import { deleteMovie, changePagesNumber } from '../actions'
import MovieList from '../components/MovieList'

const mapStateToProps = state => ({
  movies: state.movies.moviesData,
  selectedCategories: state.movies.selectedCategories,
  isToggledLikes: state.movies.isToggledLikes,
  currentPage: state.movies.currentPage,
})

const mapDispatchToProps = dispatch => ({
  deleteMovie: id => dispatch(deleteMovie(id)),
  changePagesNumber: pagesNumber => dispatch(changePagesNumber(pagesNumber))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList)
