import React, {Component} from 'react'
import Line from './Line'

class Network extends Component {
  render () {
    return (
      <div>
        <h3>Network Component</h3>
        <Line />
        <Line />
        <Line />
      </div>
    )
  }
}

export default Network
