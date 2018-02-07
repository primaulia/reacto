import React from 'react'
import { Button } from 'reactstrap';

const Trains = (props) => {
  return (
    <tr>
      <th>{ props.id }</th>
      <td>{ props.name }</td>
      <td>{ props.from }</td>
      <td>{ props.to }</td>
      <td>
        <Button outline color="info" size="sm"
          onClick={() => props.onAdd(props.id)}
        >+</Button>
      </td>
    </tr>
  )
}

export default Trains
