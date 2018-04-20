import React from 'react'

const Searchbar = props => {
  const {handleSubmit, query, handleChange} = props
  console.log("HELLOOO")
  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        Search:<input
          type="text"
          name="query"
          value={query}
          onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Searchbar
