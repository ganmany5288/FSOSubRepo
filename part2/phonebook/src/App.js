import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '123-4567-890', id: 1},
    { name: 'Ada Lovelace', phoneNumber: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phoneNumber: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phoneNumber: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filterAll, setFilterAll] = useState('')

  const [filterPersons, setFilterPersons] = useState(persons)


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
      setFilterPersons(persons)
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

  const handleFilterChange = (event) => {
    event.preventDefault()
    setFilterAll(event.target.value)
  }

  const handleFilterSearch = (event) => {
    event.preventDefault()
    // Get current filterAll state value
    // User .filter() to filter through "persons" object list and pick out person that .include("filterALL")'s  name
    // Thinking of using the conditional operator (ternerary function) to create a const that stores the filtered result
    // Check if filterAll === "" when the search button is pressed
    // IF YES THEN set peopleToShow to persons (the default unfiltered option)
    // IF NO THEN set peopleToShow to filtered persons based on if they .include() filterAll's name
    // This would be how I could use the ternery function
    // Question now is what do I want my button to do once I click on it...
    // Because I've already set peopleToShow based on filterAll's result...
    setFilterPersons(filterAll === "" ? persons : persons.filter(person => person.name.includes(filterAll)))
    console.log(persons)
    console.log(filterAll)
    console.log("This is filtedPersons: ", filterPersons)

    // Not sure what I did here but it looks like it works...
    // I basically used the setPersons state to setPersons based on filterAll using the conditional operator
    // Bug here: filtered result seemingly deleted them... so it looks like I have to create a COPY of persons and store the filtered result in there...
    // So even during initial setup, filterPersons have to contain a copy of persons (can't think of another way...)
    // But how do I do that initially is the question
    // I'm not certain if I set the initial state of a something to an object is that its own individual object or just a reference to the same point of memory to the set object...
  }

  // const peopleToShow = filterAll === ""
  //     ? persons
  //     : persons.filter(person => person.name.includes(filterAll))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter by: <input value={filterAll} onChange={handleFilterChange} />
        <button type='submit' onClick={handleFilterSearch}>Search</button>
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
        {filterPersons.map(person =>
          <li key={person.id}>{person.name} {person.phoneNumber}</li>
        )}
      </ul>
    </div>
  )
}

export default App