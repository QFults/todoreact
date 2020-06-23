import React, { useState } from 'react'
import ItemContext from './utils/ItemContext'
import Form from './components/Form'
import FullList from './components/FullList'
import Navbar from './components/Navbar'
import Grid from '@material-ui/core/Grid'

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

  itemState.handleRemoveItem = () => {
    
  }

  return (
    <ItemContext.Provider value={itemState}>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Form />
        </Grid>
        <Grid item xs={6}>
          <FullList />
        </Grid>
      </Grid>
    </ItemContext.Provider>
  )
}

export default App
