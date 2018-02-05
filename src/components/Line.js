import React, { Component } from 'react'
import { Button } from 'reactstrap'

class Line extends Component {
  render () {
    return (
      <div>
        { this.props.station }
        <br />
        <Button color="info">Go</Button>
      </div>
    )
  }
}

export default Line
