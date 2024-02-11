import React from 'react'

const Persons = (props) => {
    // console.log(props)
  return (
    <div>
      {props.Persons.map((person) => (
        <div key={person.id}>
          <p>{person.name} {person.number} <button onClick={() => props.handleDelete(person.id)}>delete</button></p>  
        </div>
       ))}
    </div>
   

  )
}

export default Persons