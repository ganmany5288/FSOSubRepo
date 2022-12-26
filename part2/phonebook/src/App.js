import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
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

    for (let i = 0; i < persons.length; i++){
      if (persons[i].name !== personObject.name){
        console.log("This is a new person")
        setPersons(persons.concat(personObject))
        setNewName('')
        return true
      }else{
        alert("This name has been used! Please try again or use a nickname.")
        setNewName('')
        return false
      }
    }


    // console.log(Object.getOwnPropertyNames(personObject))
    // console.log(Object.getOwnPropertyNames(personObject.name))

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