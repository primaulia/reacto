import React, { Component } from 'react'
import Trains from './Trains'

class DepartureBoard extends Component {

  render () {
    const data = this.props.data
    const trainList = data.map(({id, ...train}) => {
      return (
        <Trains train={train} key={id} />
      )
    })

    return (
      <div>
        <h4>{this.props.boardTitle}</h4>
        <ul>
          {trainList}
        </ul>
      </div>
    )
  }

}

export default DepartureBoard
