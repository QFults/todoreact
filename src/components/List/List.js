import React, { useContext } from 'react'
import ItemContext from '../../utils/ItemContext'
import Item from '../Item'

const List = () => {

  const { items } = useContext(ItemContext)

  return (
    <ul>
      {
        items.map(item => <Item text={item.text} />)
      }
    </ul>
  )
}

export default List
