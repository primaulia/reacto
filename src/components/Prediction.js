import React, {Component} from 'react'
import DepartureBoard from './DepartureBoard'

class Prediction extends Component {
  render () {


    return (
      <div>
        <h3>Prediction Component</h3>

        <DepartureBoard {...this.props} />
      </div>
    )
  }
}

export default Prediction
