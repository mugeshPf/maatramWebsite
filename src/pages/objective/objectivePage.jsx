import { connect } from 'react-redux'
// import { onClick, onReset } from '../actions'
import ObjectiveView from './objectiveView'

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

const ObjectivePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ObjectiveView)

export default ObjectivePage
