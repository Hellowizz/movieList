import { connect } from 'react-redux'
import { toggleLikes } from '../actions'
import ToggleLikesComponent from '../components/ToggleLikesComponent'

const mapStateToProps = state => ({
  isToggled: state.movies.isToggledLikes
})

const mapDispatchToProps = dispatch => ({
  toggleLikes: () => dispatch(toggleLikes())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleLikesComponent)
