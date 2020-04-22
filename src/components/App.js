import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true
          ? null
          : <Dashboard />}
      </div>
    )
  }
}

// eslint-disable-next-line
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default App