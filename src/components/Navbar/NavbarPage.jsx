import { connect } from 'react-redux'
// import { onClick, onReset } from '../actions'
import NavbarView from './NavbarView'

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

const NavbarPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarView)

export default NavbarPage
