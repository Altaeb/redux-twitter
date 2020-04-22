import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddTweet } from '../actions/tweets'
import { Redirect } from 'react-router-dom'

class NewTweet extends Component {
  state = {
    text: '',
    toHome: false,
  }

  handleChange = (e) => {
    const text = e.target.value

    this.setState(() => ({
      text
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { text } = this.state
    const { dispatch, id } = this.props

    dispatch(handleAddTweet(text, id)) // id = 'id' of the tweet that we're replying to a new tweet

    this.setState(() => ({
      text: '',
      toHome: id ? false : true,
    }))
  }

  render() {
    const { text, toHome } = this.state
    
    if (toHome === true) {
        return <Redirect to='/' />
      }

    return (
      <div>
        <h3 className='center'>Compose new Tweet</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={this.handleChange}
            className='textarea'
            maxLength={280}
          />
          <div className='tweet-length' style={{ color: (text.length <= 200) ? '#969696' : '#c3392a' }}>
            {text.length}/280
          </div>
          <button
            className='btn'
            type='submit'
            disabled={text === ''}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewTweet)