import { useState } from "react";
import Note from './components/Note'

const App = (props) => {

    // This is a really fancy way of stating a global variable (notes) and have a function to change that variable (setNotes)
    const[notes, setNotes] = useState(props.notes)
    
    // The useState(<Insert Stuff Here>). <Insert Stuff Here> is just a parameter for the useState hook, kinda like setting an init value for the state
    const [newNote, setNewNote] = useState(
        ''
    )

    const [showAll, setShowAll] = useState(true)


    // addNote function
    const addNote = (event) =>{
        event.preventDefault()
        const noteObject ={
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            id: notes.length +1,
        }

        setNotes(notes.concat(noteObject))

        // Reset notes or else it will stay as whatever was initially typed in.
        setNewNote('')
    }

    const handleNoteChange = (event) =>{
        event.preventDefault()
        setNewNote(event.target.value)
    }

    // Uses conditional operator (const result = condition ? val1 : val2)
    // If condition is TRUE then result = val1
    // If condition is FALSE then result = val2
    // New notes mapping to a list, divides current notes to important and non-important notes
    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important)

    return(
        <div>
            <h1>Notes</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all' }
                </button>
            </div>
            <ul>
                {notesToShow.map(note =>
                    <Note key={note.id} note={note} />    
                )}
            </ul>
            <form onSubmit={addNote}>
                <input 
                    value={newNote}
                    onChange={handleNoteChange}
                />
                <button type="submit">save</button>
            </form>
        </div>
    )
}

export default App