import React from 'react'
import { Table } from 'reactstrap'

import Trains from './Trains'

const DepartureBoard = (props) => {
  const data = props.data
  const trainList = data.map(({...train}) => {
    return (
      <Trains onAdd={props.saveMethod} {...train} key={train.id} />
    )
  })

  return (
    <div>
      <h4>Departure</h4>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>From</th>
            <th>To</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {trainList}
        </tbody>
      </Table>
    </div>
  )
}

export default DepartureBoard
