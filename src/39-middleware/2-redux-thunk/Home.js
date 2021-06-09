import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreator from './Actions/Action'
import logo from './Images/logo.svg'

const mapStateToProps = (state) => {
  return {
    age: state.age,
    loading: state.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch(actionCreator.ageUp(1)),
    onAgeDown: () => dispatch(actionCreator.ageDown(1)),
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Simple Redux Middleware</h1>
        <h1>Age: {this.props.age}</h1>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        {this.props.loading && <img src={logo} alt='logo.svg' />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
