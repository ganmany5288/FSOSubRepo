import { useState , useEffect } from 'react'
import Filter from './components/Filter'
import Phonebook from './components/Phonebook'
import Humans from './components/Humans'
import axios from 'axios'
import peopleService from './services/peopleService'
import Notification from './services/Notification'
import ErrorNoti from './services/ErrorNoti'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filterAll, setFilterAll] = useState('')
  const [filterPersons, setFilterPersons] = useState(persons)
  const [notificationMessages, setNotificationMessages] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    //getAll() from src/services, axios HTTP GET request
    peopleService.getAll().then(initialContact => {
      console.log('promise fulfilled!')
      setPersons(initialContact)
      setFilterPersons(initialContact)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      phoneNumber: newPhoneNumber,
      id: persons.length + 1
    }

    // Currently thinking of a way to not use a loop to check if this person has existed in this... persons list
    // But filter is basically a loop lol

    if (persons.filter( person => person.name === personObject.name).length > 0 ){
      if (window.confirm("Are you sure you want to update this person's phone number?")){
        const personToChange = persons.find( person => person.name === personObject.name)

        // This part feels weird... don't think I'm using proper javascript...
        personToChange.phoneNumber = personObject.phoneNumber
        peopleService.update(personToChange.id, personToChange).then(promise => console.log(promise))

        // Notification Message created and its timer before it disappear
        // Promise = success state
        setNotificationMessages(`${personObject.name} has been updated!`)
        setTimeout(() => {
          setNotificationMessages(null)
        }, 5000)
      }
    }else{
        // HTTP POST Request, its a promise request that contains 3 states (pending, fulfilled, failed)
      peopleService.create(personObject).then(promise => console.log(promise))
      // Promise = success state
      setNotificationMessages(`${personObject.name} has been added to the phonebook!`)
      setTimeout(() => {
        setNotificationMessages(null)
      }, 5000)
    }

  }

  // Handles event changes

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

  const handleDeleteChange = (event, id) => {
    const temp = persons.find(person => person.id === id)
    event.preventDefault()
    // Small popup window asking if you want to confirm your action
    if (window.confirm("Are you sure you want to delete this person?")) {
      peopleService
      .deleteUser(id)
      .then(promise => console.log(promise))
      .catch(error => {
        // Promise = failed state
        setErrorMsg(`${temp.name} has already been deleted from the phonebook!`)
        setTimeout(() => {
          setErrorMsg(null)
        }, 5000)
      })
      setFilterPersons(persons.filter(person => person.id !== id))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessages} />
      <ErrorNoti message={errorMsg} />


      <Filter filterAll={filterAll}  handleFilterChange={handleFilterChange} handleFilterSearch={handleFilterSearch}/>

      <h2>Add a Number</h2>

      <Phonebook persons={persons} addPerson={addPerson} newName={newName} newPhoneNumber={newPhoneNumber} handlePersonChange={handlePersonChange} handlePhoneChange={handlePhoneChange} />

      <h2>Numbers</h2>
      {/* Mapping persons list to a new array of list that show each individual person*/}

      <Humans filterPersons={filterPersons} handleDeleteChange={handleDeleteChange}/>
    </div>
  )
}

export default App