import { useState } from 'react'

const person = {
  name: 'Arto Hellas',
  number: '040-123456'
}


const App = () => {
  const [persons, setPersons] = useState([person]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState(0)
  const [newFilter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(true)

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
      return
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
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  } 

  const handleShowAll = (event) => {
    event.preventDefault()
    if (showAll) {
      setShowAll(false)
    } else {
      setShowAll(true)
    }
    console.log('showAll', showAll)
  }
  
  const personstoShow = showAll
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          filter shown with <input onChange={handleFilterChange}/>
          <button onClick={handleShowAll}>
            show {showAll ? 'all' : 'Filtered'}
          </button>
      </div>
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
        <Phonebook persons={personstoShow} />
      </div>
      ...
    </div>
  )
}

export default App