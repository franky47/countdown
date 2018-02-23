import React from 'react'
import './Card.css'

export default class Card extends React.Component {
  state = {
    revealed: false
  }

  render () {
    const { revealed } = this.state
    const { children } = this.props
    return (
      <div className='card-container'>
        <div
          className={`card ${revealed ? 'revealed' : ''}`}
          onClick={this._toggleRevealed}
        >
          <span className='back'>C</span>
          <span className='front'>{children}</span>
        </div>
      </div>
    )
  }
  _toggleRevealed = () => {
    this.setState(prevState => ({
      revealed: !prevState.revealed
    }))
  }
}
