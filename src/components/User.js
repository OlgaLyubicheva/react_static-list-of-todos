import React from 'react'
import {users} from './users'

const User = (props) => {
  const user = users.find(person => person.id === props.id);
  
  return (
    <p className="todo__item-user">
      {user.name} ({user.username}),<br />
      {user.website}
    </p>)
}

export default User;