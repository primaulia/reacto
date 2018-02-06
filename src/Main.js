import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'

import Navbar from './components/Navbar'
import Network from './components/Network'
import Prediction from './components/Prediction'
import SearchBar from './components/SearchBar'

import trainsData from './data/trains'
const stations = ['orchard', 'dhoby gaut', 'cityhall']

class Main extends Component {
  constructor() {
    super()
    this.state = {
      keyword: 'Search',
      trains: trainsData
    } // can only set the initial state here
  }

  handleChange = (evt) => {
    // if change happened
    // get the new title from input field
    // change the state
    let newTitle = evt.target.value || 'Search'
    let filteredTrainsDate = this.state.trains.filter(train => {
      return train.from.toLowerCase().includes(newTitle.toLowerCase())
    })

    this.setState({ // `this` =>
      keyword: newTitle,
      trains: filteredTrainsDate.length ? filteredTrainsDate : trainsData
    })
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Container>
          <Row>
            <Col xs="12" md="3">
              <SearchBar searchTitle="Search" searchMethod={this.handleChange} />
            </Col>
            <Col md="auto">
              <Prediction
                data={this.state.trains}
                boardTitle={this.state.keyword}
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Main
