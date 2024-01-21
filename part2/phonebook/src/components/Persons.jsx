import React from 'react'

const Persons = (props) => {
    // console.log(props)
  return (
    <div>
         {props.Persons.map((person) => (
        <p key={person.id}>{person.name} {person.number}</p>
        ))}
    </div>
  )
}

export default Persons