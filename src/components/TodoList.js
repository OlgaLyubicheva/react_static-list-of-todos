import React from 'react'
import TodoItem from './TodoItem'
import {todos} from './todos'

const TodoList = () => (
    <div>
      {
        todos.map((item) => 
        <TodoItem 
          title = {item.title}
          userId = {item.userId}
        />)
      }  
    </div>
  );

export default TodoList;