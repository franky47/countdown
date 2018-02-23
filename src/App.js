import React, { Component } from 'react'

import CountdownClock from './components/CountdownClock'
import Card from './components/Card'

class App extends Component {
  state = {
    time: 0
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        time: prevState.time + 0.1
      }))
    }, 100)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className="App">
        <CountdownClock size={20} value={this.state.time} />
        <div>
          <Card>3</Card>
          <Card>5</Card>
          <Card>25</Card>
          <Card>50</Card>
          <Card>100</Card>
          <Card>6</Card>
        </div>
      </div>
    )
  }
}

export default App
