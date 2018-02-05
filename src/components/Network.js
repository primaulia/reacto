import React, {Component} from 'react'
import Line from './Line'

class Network extends Component {
  render () {

    const stationsList = this.props.stations.map((name, index) => <Line key={index} station={name} />)

    return (
      <div>
        {
          this.props.maintenance ?
            (<h3>Site is under maintenance</h3>):
            (
              <div>
                <h3>Network</h3>
                { stationsList }
              </div>
            )
        }
      </div>
    )
  }
}

export default Network
