import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

const SearchBar = (props) => {
  return (
    <div>
      <h1>{props.searchTitle}</h1>
      <Form>
        <FormGroup>
          <Input id="searchKeyword" type="text" name="text" placeholder="Type your station" onChange={props.searchMethod} />
        </FormGroup>
      </Form>
    </div>
  )
}

export default SearchBar
