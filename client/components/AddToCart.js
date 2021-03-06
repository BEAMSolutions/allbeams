import React from 'react'

const AddToCart = props => {
const { handleSubmit, handleChange } = props
return (
  <form className="add-to-cart" onSubmit={handleSubmit}>
    <div className="form-group">
      <label>
        <p>Select quantity:</p>
        <select onChange={handleChange} className="form-control">
          <option value="-">-</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <button className="btn btn-primary" type="submit">
          Add to Cart
        </button>
      </label>
    </div>
  </form>
)}

export default AddToCart
