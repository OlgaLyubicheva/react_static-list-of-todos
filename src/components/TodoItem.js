import React from 'react'
import User from './User'

function TodoItem(props) {
  return (
    <li className = "todo__item">
      <h2 className = "todo__item-title"> 
        {props.title}
      </h2>
      
      <User 
        id = {props.userId}
      />
    </li>
  )
}
export default TodoItem;