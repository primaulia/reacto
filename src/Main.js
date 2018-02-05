import React, {Component} from 'react'

import {Container, Row, Col} from 'reactstrap'
import Network from './components/Network'
import Prediction from './components/Prediction'
import trainsData from './data/trains'

const stations = ['orchard', 'dhoby gaut', 'cityhall']

class Main extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="12" md="3">
            <Network maintenance={false} stations={stations} />
          </Col>
          <Col md="auto">
            <Prediction data={trainsData} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Main
