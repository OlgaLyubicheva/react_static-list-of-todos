import React from 'react'
import {users} from './users'

function User(props) {
  return (
    <p className = "todo__item-user"> 
      {
        users.map(person => {
          if (person.id === props.id) {
            return person.name + ' ' + '(' + person.username +'), '+ person.website;
          } 
        })
      }
    </p>
  )
}

export default User;