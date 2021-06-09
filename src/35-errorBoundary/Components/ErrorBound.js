import React, { Component } from 'react'

class ErrorBound extends Component {
  constructor() {
    super()
    this.state = {
      error: false,
    }
  }

  static getDerivedStateFromError() {
    return { error: true }
  }
  render() {
    return (
      <div>
        {this.state.error ? (
          <h1>Custom Page for Error Handling</h1>
        ) : (
          this.props.children
        )}
      </div>
    )
  }
}

export default ErrorBound
