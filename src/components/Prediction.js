import React from 'react'
import DepartureBoard from './DepartureBoard'

const Prediction = (props) => {
  return (
    <div>
      <h3>Train Schedule</h3>
      <DepartureBoard {...props} />
    </div>
  )
}

export default Prediction
