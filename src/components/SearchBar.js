import React from 'react'
import { Form, FormGroup, Input } from 'reactstrap'

const SearchBar = (props) => {
  return (
    <div>
      <h2>Search</h2>
      <Form>
        <FormGroup>
          <Input id="searchKeyword" type="text" name="text" placeholder="Type your station" onChange={props.searchMethod} />
        </FormGroup>
      </Form>
    </div>
  )
}

export default SearchBar
