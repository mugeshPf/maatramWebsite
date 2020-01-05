import { connect } from 'react-redux'
import AwardsView from './awardsView'
// import { onClick, onReset } from '../actions'
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

const AwardsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(AwardsView)

export default AwardsPage
