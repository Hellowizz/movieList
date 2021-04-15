import { connect } from 'react-redux'
import { selectCategory } from '../actions'
import CategoryList from '../components/CategoryList'

const mapStateToProps = state => ({
  categories: state.movies.shownCategories,
  selectedCategories: state.movies.selectedCategories
})

const mapDispatchToProps = dispatch => ({
  selectCategory: catName => dispatch(selectCategory(catName))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList)
