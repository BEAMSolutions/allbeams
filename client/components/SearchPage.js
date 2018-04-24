import React from 'react'
import SearchResults from './SearchResults'

const SearchPage = props => {
  //TODO KMS FIX THIS LATER
  //WE WANT THE SEARCH CLASS AS HIGH AS POSSIBLE

  return (
    <div id="search-page">
      {/* <!-- All Products Section --> */}
      <SearchResults query={props.query} />
      {/* <!-- Back to Top Section --> */}
      <h3 id="back-to-top">THIS IS THE SEARCH PAGE</h3>
      {/* <!-- Footer --> */}
    </div>
  )
}

export default SearchPage
