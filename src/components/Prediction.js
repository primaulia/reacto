import React, {Component} from 'react'
import DepartureBoard from './DepartureBoard'

class Prediction extends Component {
  render () {
    let { name, from, to } = this.props.data
    
    return (
      <div>
        <h3>Prediction Component</h3>

        <ul>
          <li>
            <h4>{ name }</h4>
            <p>
              From: { from }<br/>
              To: { to }
            </p>
          </li>
        </ul>

        <DepartureBoard />
        <DepartureBoard />
      </div>
    )
  }
}

export default Prediction
