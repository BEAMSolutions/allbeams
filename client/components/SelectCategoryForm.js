import React from 'react'

const SelectCategoryForm = props => {
  const { categories, handleChange } = props
  return (
    <form className="form-category">
      <label className="dropdown-category">
        <span>Pick your favorite beam category: </span>
        <select onChange={handleChange}>
          <option value="All Products">All Products</option>
          {categories.map(category => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </label>
    </form>
  )
}

export default SelectCategoryForm
