import { useState, useEffect } from 'react'
import noteService from './services/notes'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const toggleImportanceOf = (id) => {
      const url = `http://localhost:3001/notes/${id}`
      const note = notes.find(n => n.id === id)
      const changedNote = { ...note, important: !note.important}

      noteService
        .update(id, changedNote)
        .then(returnedNote => {
          setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error =>{
        alert(`the note '${note.content}' was already deleted from server`)
        setNotes(notes.filter(n => n.id !== id))
      })
    }

  const hook =() =>{
    console.log('effect')
    noteService
      .getAll()
      .then(initialNotes =>{
        console.log('promise fulfilled')
        setNotes(initialNotes)
      })
      .catch(error => {
        console.error('Error fetching notes:', error)
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
    noteService.create(noteObject)
      .then(returnedNota => {
        setNotes(notes.concat(returnedNota))
      })
      .catch(error => {
        console.error('Error creating note:', error)
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