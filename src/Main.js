import React, {Component} from 'react'
import Network from './Network'
import Prediction from './Prediction'


class Main extends Component {
  render() {
    return (
      <div>
        {/* reuse the components */}
        <Network />
        <Prediction />
      </div>
    )
  }
}

export default Main
