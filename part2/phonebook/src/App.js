import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', phoneNumber: '123-4567-890', id: 1}
  ]) 
  const [newName, setNewName] = useState('')

  function areThesePeopleEqual(first, second){
    console.log("Hello World")
    const al = Object.getOwnPropertyNames(first)
    const bl = Object.getOwnPropertyNames(second)

    // if (al.length != bl.length) return false

    for (const key of al) if (first[key] !== second[key]) return false;

    return true;
  }


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName
    }

    // console.log(personObject.name)
    // console.log(personObject)

    // console.log(personObject.name)

    // Exercise 2.7 START
    // Point of exercise is to update this code to prevent users from adding users that already exists in the phonebook and alert the user if such action is taken...

    var shouldUpdate = true

    for (let i = 0; i < persons.length; i++){
      if (persons[i].name === personObject.name){
        alert(`${personObject.name} has already beed added to the phonebook`)
        setNewName('')
        shouldUpdate = false
      }
    }

    if (shouldUpdate === true){
      console.log("This is a new person")
      setPersons(persons.concat(personObject))
      setNewName('')
    }

    // Exercise 2.7 END

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