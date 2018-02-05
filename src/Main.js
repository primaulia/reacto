import React, {Component} from 'react'
import Network from './components/Network'
import Prediction from './components/Prediction'


class Main extends Component {
  render() {
    return (
      <div>
        <Network />
        <Prediction />
      </div>
    )
  }
}

export default Main
