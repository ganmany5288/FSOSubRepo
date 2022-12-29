import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', phoneNumber: '123-4567-890', id: 1}
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')



  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      phoneNumber: newPhoneNumber,
      id: persons.length + 1
    }


    var shouldUpdate = true

    for (let i = 0; i < persons.length; i++){
      if (persons[i].name === personObject.name && persons[i].phoneNumber === personObject.phoneNumber){
        alert(`${personObject.name} has already beed added to the phonebook`)
        setNewName('')
        setNewPhoneNumber('')
        shouldUpdate = false
      }
    }

    if (shouldUpdate === true){
      console.log("This is a new person")
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewPhoneNumber('')
    }


  }

  const handlePersonChange = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    event.preventDefault()
    setNewPhoneNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter: <input />
        <button type='submit'>Search</button>
      </div>
      <form onSubmit={addPerson}>
        <h2>Add a Number</h2>
        <div>
          Name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          Phone Number: <input value={newPhoneNumber} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* Mapping persons list to a new array of list that show each individual person*/}
      <ul>
        {persons.map(person =>
          <li key={person.id}>{person.name} {person.phoneNumber}</li>
        )}
      </ul>
    </div>
  )
}

export default App