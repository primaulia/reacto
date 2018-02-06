import React from 'react'

const SearchBar = (props) => {
  return (
    <div>
      <h1>{props.searchTitle}</h1>
      <label>
        Search Trains:
        <input id="input" type='text' onChange={props.searchMethod} />
      </label>
    </div>
  )
}

export default SearchBar
