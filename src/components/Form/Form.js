import React, { useContext } from 'react'
import ItemContext from '../../utils/ItemContext'

const Form = () => {

  const {
    item,
    handleInputChange,
    handleAddItem
  } = useContext(ItemContext)

  return (
    <form>
      <p>
        <label htmlFor="item">item</label>
        <input
          type="text"
          name="item"
          id="item"
          value={item}
          onChange={handleInputChange} />
      </p>
      <p>
        <button onClick={handleAddItem}>Add Item</button>
      </p>
    </form>
  )
}

export default Form
