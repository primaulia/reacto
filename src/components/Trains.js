import React from 'react'

const Trains = ({id, name, from, to}) => {
  return (
    <tr>
      <th>{ id }</th>
      <td>{ name }</td>
      <td>{ from }</td>
      <td>{ to }</td>
    </tr>
  )
}

export default Trains
