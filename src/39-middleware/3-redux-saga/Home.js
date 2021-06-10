import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    age: state.age,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: 'AGE_UP', value: 1 }),
    onAgeDown: () => dispatch({ type: 'AGE_DOWN', value: 1 }),
  }
}

class Home extends React.Component {
  render() {
    return (
      <>
        <h1>Redux Saga</h1>
        <h1>Age: {this.props.age}</h1>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
