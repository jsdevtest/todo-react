import React from "react"
import Item from "./Item"

const List = ({ todos, onDeleted }) => {
  return (
    <React.Fragment>
      {todos.map(item => {
        // чтобы в Item не передавать id которые там не используется
        const { id, ...itemProps } = item // Rest parametr
        return (
          <Item
            key={id}
            onDeleted={() => onDeleted(id)}
            {...itemProps}
          />
        )
      })}
    </React.Fragment>
  )
}

export default List
