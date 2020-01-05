import { connect } from 'react-redux'
// import { onClick, onReset } from '../actions'
import HomeView from './HomeView'
import NewsAndEventsView from './newsAndEventsView'

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

const NewsAndEventsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsAndEventsView)

export default NewsAndEventsPage
