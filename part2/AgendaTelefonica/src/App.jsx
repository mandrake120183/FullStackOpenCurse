import { useState } from 'react'



const App = () => {
  const [persons, setPersons] = useState([0]) 
  const [newName, setNewName] = useState('')

  const Phonebook = ({ persons }) => {
    return (
      <div>
        {persons.map((person, index) => (
          <p key={index}>{person.name}</p>
        ))}
      </div>
    )
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
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
    const personObject = {
      name: newName
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNameChange}/>
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