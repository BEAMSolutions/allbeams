import React from 'react'

const Searchbar = props => {
  console.log(props)
  return (
    <div>
      <form onSubmit={() => props.handleSubmit()}>
        Search:<input type="text" name="query" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Searchbar
