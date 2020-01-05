import { connect } from 'react-redux'
// import { onClick, onReset } from '../actions'
import HomeView from './HomeView'

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

const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView)

export default HomePage
