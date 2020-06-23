import React, { useState } from 'react'

const App = () => {

  const [itemState, setItemState] = useState({
    item: '',
    items: []
  })

  itemState.handleInputChange = event => {
    setItemState({ ...itemState, [event.target.name]: event.target.value })
  }

  itemState.handleAddItem = event => {
    event.preventDefault()
    let items = JSON.parse(JSON.stringify(itemState.items))
    items.push({
      text: itemState.item,
      isDone: false
    })
    setItemState({ ...itemState, items, item: '' })
  }
  
  return (
    <>
      <form>
        <p>
          <label htmlFor="item">item</label>
          <input
            type="text"
            name="item"
            id="item"
            value={itemState.item}
            onChange={itemState.handleInputChange} />
        </p>
        <p>
          <button onClick={itemState.handleAddItem}>Add Item</button>
        </p>
      </form>
      <ul>
        {
          itemState.items.map(item => <li>{item.text}</li>)
        }
      </ul>
    </>
  )
}

export default App
