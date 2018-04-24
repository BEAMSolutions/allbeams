import React from 'react'

const Searchbar = props => {
  const {handleSubmit, query, handleChange} = props
  return (
    <div className="searchbar">
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>Search:</label>
        <input
          type="text"
          name="query"
          value={query}
          onChange={handleChange} />
        <button className="btn btn-primary" type="submit" value="Submit">Submit</button>
      </form>
    </div>
  )
}

export default Searchbar
