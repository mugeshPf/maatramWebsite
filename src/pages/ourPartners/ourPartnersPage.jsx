import { connect } from 'react-redux'
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

const OurPartnersPage = connect(
  mapStateToProps,
  mapDispatchToProps
)()

export default OurPartnersPage
