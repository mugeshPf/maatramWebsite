import { connect } from 'react-redux'
// import { onClick, onReset } from '../actions'
import HomeView from './HomeView'
import GalleryView from './galleryView'

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

const GalleryPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryView)

export default GalleryPage
