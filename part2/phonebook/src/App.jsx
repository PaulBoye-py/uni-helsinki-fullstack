import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from "axios"


const App = () => {
   const [persons, setPersons] = useState([])
   const [newName, setNewName] = useState('')
   const [newNumber, setNewNumber] = useState('')
   const [nameSearch, setNameSearch] = useState('')

   const getPersonsHook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
   }

   useEffect(getPersonsHook, [])

  // Handle Input Changes
   const handleNewNameChange = (e) => {
    setNewName(e.target.value)
   }

   const handleNewNumberChange = (e) => {
    setNewNumber(e.target.value)
   }

   const handleNameSearch = (e) => {
    setNameSearch(e.target.value)
   }

  // Search function
   const searchFilter = persons.filter((person) => 
    person.name.toLowerCase().includes(nameSearch.toLowerCase())
   )

   
  // Handle Submit
   const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {name: newName, 
                      number: newNumber, 
                      id: Math.max(...persons.map(person => person.id), 0) + 1}
    if (persons.some(person => person.name === newName )) {
      alert(`${newName} is already added to the phonebook`)
      return;
    }

    if(newName === "") {
      alert("Name cannot be empty!")
      return
    }

    if(newNumber === "") {
      alert("Phone number cannot be empty!")
      return
    }
    setPersons([...persons, newPerson])
    setNewName("")
    setNewNumber("")
    console.log("Added")
   }

   return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameSearch={nameSearch} handleNameSearch={handleNameSearch}/>

      <h1>add a new</h1>
      
      <PersonForm 
        nameValue={newName} 
        numberValue = {newNumber} 
        handleNewNameChange={handleNewNameChange}
        handleNewNumberChange={handleNewNumberChange} 
        handleSubmit={handleSubmit}
        />
      <h2>Numbers</h2>

        <Persons Persons={searchFilter}/>
    </div>
   )
}
export default App
