import { connect } from 'react-redux'
// import { onClick, onReset } from '../actions'
import HomeView from './HomeView'
import ContactView from './contactView'

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

const ContactPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactView)

export default ContactPage
