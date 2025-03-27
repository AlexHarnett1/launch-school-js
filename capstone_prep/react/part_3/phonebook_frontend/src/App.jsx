import { useState, useEffect } from 'react'
import phonebookService from './services/phonebook';
import Notification from './components/Notification';
import './index.css'

const Persons = ({ persons, filterName, onDeletePerson }) => {
  let filteredPersons = filterName === '' ? persons : persons.filter(person => (
    person.name.toLowerCase().includes(filterName.toLowerCase()))
  );

  let allPersons = filteredPersons.map(person => (
    <Person key={person.id} person={person} onDeletePerson={() => onDeletePerson(person.id)} />)
  )

  return (
    <ul>
      {allPersons}
    </ul>
  )
}

const Person = ({person, onDeletePerson}) => {
  return (
    <li>
      {person.name} {person.number} <button onClick={onDeletePerson}>Delete</button>
    </li>)
}

const Filter = ({newFilterName, handleFilterNameChange}) => {
  return (
    <form>
      <div>
        filter shown with: <input value={newFilterName} onChange={handleFilterNameChange} />
      </div>
    </form>
  )
}

const PersonForm = (props) => {
  return (
    <form onSubmit={props.onNameSubmitted}>
      <div>
        name: <input value={props.newName} onChange={props.handleNameChange} />
        PhoneNumber: <input value={props.newNumber} onChange={props.handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilterName, setNewFilterName] = useState('')
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    phonebookService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  function handleNameChange(event) {
    setNewName(event.target.value)
  }

  function handleNumberChange(event) {
    setNewNumber(event.target.value)
  }

  function handleFilterNameChange(event) {
    setNewFilterName(event.target.value)
  }

  function onNameSubmitted(event) {
    event.preventDefault();
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already in the phonebook`)
      return
    }

    let person = {
      name: newName,
      number: newNumber,
    }

    phonebookService.create(person).then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNotification(`Added ${returnedPerson.name}`)
      setTimeout(() => setNotification(null), 5000)
      setNewName('')
      setNewNumber('')
    })
  }

  function onDeletePerson(id) {
    console.log(id)
    phonebookService.deletePerson(id).then(response => {
      console.log(response)
      setPersons(persons.filter(person => person.id !== id))
    })
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notification} />
      <Filter newFilterName={newFilterName} handleFilterNameChange={handleFilterNameChange} />
      <h2>Add a new</h2>
      <PersonForm newName={newName} handleNameChange={handleNameChange}
       newNumber={newNumber} handleNumberChange={handleNumberChange}
       onNameSubmitted={onNameSubmitted} />
      <h2>Numbers</h2>
      <Persons persons={persons} filterName={newFilterName}
        onDeletePerson={onDeletePerson} />
    </div>
  )
}

export default App
