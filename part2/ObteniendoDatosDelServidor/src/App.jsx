import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const toggleImportanceOf = (id) => {
      const url = `http://localhost:3001/notes/${id}`
      const note = notes.find(n => n.id === id)
      const changedNote = { ...note, important: !note.important}

      axios.put(url, changedNote).then(response => {
        setNotes(notes.map(note => note.id !== id ? note : response.data))
      })
    }

  const hook =() =>{
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response =>{
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }

  useEffect(hook, [])

console.log('render', notes.length, 'notes')

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: true,
    }
    axios.post('http://localhost:3001/notes', noteObject)
      .then(response => {
        setNotes(notes.concat(response.data))
      })
    setNotes(notes.concat(noteObject))
  }

  const handleNotechange= (event) => {
    console.log('event.target.value',event.target.value)
    setNewNote(event.target.value)
  }
  
  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note, i) => 
          <Note
            key={i}
            note={note} 
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNotechange} />
        <button type="sudmit">save</button>
      </form>
    </div>
  )
}

export default App