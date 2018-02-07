import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'

import Navbar from './components/Navbar'
// import Network from './components/Network', commented as it's unused
import Prediction from './components/Prediction'
import SearchBar from './components/SearchBar'
import SavedTrains from './components/SavedTrains'

import trainsData from './data/trains'
// const stations = ['orchard', 'dhoby gaut', 'cityhall'], commented as it's unused

class Main extends Component {
  constructor() {
    super()
    this.state = {
      keyword: 'Search',
      trains: trainsData,
      savedTrains: []
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

  handleAdd = (id) => {
    let addedTrain = trainsData.find(train => train.id === id)
    this.setState({ // `this` =>
      savedTrains: [...this.state.savedTrains, addedTrain]
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
              <SavedTrains savedTrains={this.state.savedTrains}/>
            </Col>
            <Col md="9">
              <Prediction
                data={this.state.trains}
                saveMethod={this.handleAdd}
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Main
