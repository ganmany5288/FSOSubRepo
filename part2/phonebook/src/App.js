import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName
    }

    setPersons(persons.concat(personObject))

    setNewName('')
  }

  const handlePersonChange = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* Mapping persons list to a new array of list that show each individual person*/}
      <ul>
        {persons.map(person =>
          <li key={person.name}>{person.name}</li>
        )}
      </ul>
    </div>
  )
}

export default App