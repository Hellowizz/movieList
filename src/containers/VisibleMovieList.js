import { connect } from 'react-redux'
import { deleteMovie } from '../actions'
import MovieList from '../components/MovieList'

const mapStateToProps = state => ({
  movies: state.movies.moviesData,
  selectedCategories: state.movies.selectedCategories,
  isToggledLikes: state.movies.isToggledLikes
})

const mapDispatchToProps = dispatch => ({
  deleteMovie: id => dispatch(deleteMovie(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList)
