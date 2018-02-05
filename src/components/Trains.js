import React, { Component } from 'react'

class Trains extends Component {

  render () {
    let {from, name, to} = this.props.train

    return (
      <li>
        <h4>{ name }</h4>
        <p>
          From: { from }<br/>
          To: { to }
        </p>
      </li>
    )
  }

}

export default Trains
