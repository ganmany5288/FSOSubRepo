import { useState , useEffect } from 'react'
import Filter from './components/Filter'
import Phonebook from './components/Phonebook'
import Humans from './components/Humans'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filterAll, setFilterAll] = useState('')
  const [filterPersons, setFilterPersons] = useState(persons)

  useEffect(() => {
    console.log("effect hook")
    axios
    .get('http://localhost:3001/persons')
    .then(response =>{
        console.log('promise fulfilled!')
        setPersons(response.data)
        setFilterPersons(response.data)
    });
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      phoneNumber: newPhoneNumber,
      id: persons.length + 1
    }

    if (newName === "" || newPhoneNumber === ""){
      alert("A field is left empty! Please fill it out!")
    }else{
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
        // No idea why the below has to be to make the thing show instead of just setFilterPersons(persons) which basically worked before
        setFilterPersons(persons.concat(personObject))
        setNewName('')
        setNewPhoneNumber('')
  
      }
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
    setFilterPersons(filterAll === "" ? persons : persons.filter(person => person.name.includes(filterAll)))
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filterAll={filterAll}  handleFilterChange={handleFilterChange} handleFilterSearch={handleFilterSearch}/>

      <h2>Add a Number</h2>

      <Phonebook persons={persons} addPerson={addPerson} newName={newName} newPhoneNumber={newPhoneNumber} handlePersonChange={handlePersonChange} handlePhoneChange={handlePhoneChange} />

      <h2>Numbers</h2>
      {/* Mapping persons list to a new array of list that show each individual person*/}

      <Humans filterPersons={filterPersons}/>
    </div>
  )
}

export default App