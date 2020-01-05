import { connect } from 'react-redux'
// import { onClick, onReset } from '../actions'
import TeamView from './teamView'

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

const TeamPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamView)

export default TeamPage
