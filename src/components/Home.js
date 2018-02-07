import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'

import Prediction from './Prediction'
import SearchBar from './SearchBar'
import SavedTrains from './SavedTrains'

import trainsData from '../data/trains'

class Home extends Component {
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
    let searchKeyword = evt.target.value || 'Search'
    let filteredTrainsData = this.state.trains.filter(train => {
      return train.from.toLowerCase().includes(searchKeyword.toLowerCase())
    })

    console.log(filteredTrainsData)

    this.setState({
      keyword: searchKeyword,
      trains: filteredTrainsData.length ? filteredTrainsData : trainsData
    })
  }

  handleAdd = (id) => {
    let addedTrain = trainsData.find(train => train.id === id)

    this.setState({
      savedTrains: [...this.state.savedTrains, addedTrain]
    })
  }

  render () {
    return (
      <Container>
        <Row>
          <Col xs="12" md="3">
            <SearchBar searchMethod={this.handleChange} />
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
    )
  }

}

export default Home
