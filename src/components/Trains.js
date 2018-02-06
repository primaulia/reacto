import React from 'react'

const Trains = ({train}) => {
  return (
    <li>
      <h4>{ train.name }</h4>
      <p>
        From: { train.from }<br />
        To: { train.to }
      </p>
    </li>
  )
}

export default Trains
