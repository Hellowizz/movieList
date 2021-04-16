import { connect } from 'react-redux'
import { changeCurrentPage } from '../actions'
import PaginationComponent from '../components/PaginationComponent'

const mapStateToProps = state => ({
  currentPage: state.movies.currentPage,
  numberOfPages: state.movies.numberOfPages
})

const mapDispatchToProps = dispatch => ({
  changeCurrentPage: page => dispatch(changeCurrentPage(page))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationComponent)
