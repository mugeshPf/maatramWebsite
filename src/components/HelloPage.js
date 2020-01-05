import { connect } from 'react-redux'
import { onClick, onReset } from '../actions'
import Hello from './HelloView'

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

const HelloPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello)

export default HelloPage
