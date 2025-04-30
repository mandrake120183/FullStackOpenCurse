import { useState } from 'react'

const person = {
  name: 'Arto Hellas',
  number: '040-123456'
}

const App = () => {
  const [persons, setPersons] = useState([0]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState(0)

  const Phonebook = ({ persons }) => {
    return (
      <div>
        {persons.map((person, index) => (
          <p key={index}>{person.name} {person.number}</p>
          
        ))}
      </div>
    )
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName && person.number === newNumber)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    if (newName === '') {
      alert('Please enter a name')
      return
    }
    if (newName.length < 3) {
      alert('Name must be at least 3 characters long')
      return
    }
    if (persons.length >= 10) {
      alert('Phonebook is full')
      return
    }
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    if (persons.some(person => person.number === newNumber)) {
      alert(`${newNumber} is already added to phonebook`)
      return
    }
    if (newNumber === ''){
      alert('Please enter a number')
    }
    if (newNumber.length < 8){
      alert('Number must be at least 8 characters long')
      return
    }
    if (isNaN(newNumber)){
      alert('Please enter a valid numbr')
      return
    }

    const personObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNameChange}/>
          number: <input onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <Phonebook persons={persons} />
      </div>
      ...
    </div>
  )
}

export default App