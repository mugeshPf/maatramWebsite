import { connect } from 'react-redux'
// import { onClick, onReset } from '../actions'
import BlogView from './blogView'

const mapStateToProps = (state) => {
  return {
    message: state.helloWorld.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      return dispatch(onClick())
    },
    onReset: () => {
      return dispatch(onReset())
    },
  }
}

const BlogPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogView)

export default BlogPage
