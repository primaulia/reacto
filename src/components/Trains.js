import React from 'react'
import { Button } from 'reactstrap';

const Trains = ({id, name, from, to}) => {
  return (
    <tr>
      <th>{ id }</th>
      <td>{ name }</td>
      <td>{ from }</td>
      <td>{ to }</td>
      <td><Button outline color="info" size="sm">+</Button></td>
    </tr>
  )
}

export default Trains
