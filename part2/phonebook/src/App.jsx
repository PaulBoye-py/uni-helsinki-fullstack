import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import axios from "axios"


const App = () => {
   const [persons, setPersons] = useState([])
   const [newName, setNewName] = useState('')
   const [newNumber, setNewNumber] = useState('')
   const [nameSearch, setNameSearch] = useState('')


  // Get all Contacts
  useEffect(() => {
    personService
      .getAllPersons()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

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
                      id: String(Math.max(...persons.map(person => person.id), 0) + 1)
    }

    // Check if the Person's name already exists 
    if (persons.some(person => person.name === newName && person.number !== newNumber) ) {
      const confirmUpdate = window.confirm(`${newName} is already added to phonebook. Replace the old number with a new one?`)
      // alert(`${newName} is already added to the phonebook`)
      if (confirmUpdate) {
        const existingPerson = persons.find(person => person.name === newName)
        if (existingPerson) {
          const updatedPerson = {
            ...existingPerson, 
            number: newNumber,
          }
          console.log(updatedPerson)
          updatePerson(updatedPerson.id)
        }
    
        
      }
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

    // Add new Persons to DB
    personService
      .addPerson(newPerson)
      .then(returnedPerson => {
        setPersons([...persons, returnedPerson])
        setNewName("")
        setNewNumber("")
        console.log("Added")
      })

      .catch(error => {
        console.log(error)
      })
  }

  //  Handle Delete
  const handleDelete = (id) => {
    const person = persons.find(n => n.id === id)

    if (!person) {
      console.error(`Person with id ${id} not found.`)
      return;
    }

    const confirmDelete = window.confirm(`Delete ${person.name}?`)

    if (confirmDelete) {
      personService
      .deletePerson(person.id)
      .then(() => {
        setPersons(prevPersons => prevPersons.filter(p => p.id !== person.id));
      })
      .catch(error => {
        console.log(error)
      })
    }
  }

  // Update Phone Number
    const updatePerson = id => {
      const person = persons.find(n => n.id === id)
      const changedPerson = {...person, number : newNumber}
      console.log(changedPerson)

      personService
        .updatePerson(id, changedPerson)
        .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
        })
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

        <Persons Persons={searchFilter} handleDelete={handleDelete}/>
    </div>
   )
}
export default App
