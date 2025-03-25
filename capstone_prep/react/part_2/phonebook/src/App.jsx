import { useState } from 'react'

const Persons = ({ persons, filterName }) => {
  let filteredPersons = filterName === '' ? persons : persons.filter(person => (
    person.name.toLowerCase().includes(filterName.toLowerCase()))
  );

  let allPersons = filteredPersons.map(person => <Person key={person.id} person={person} />)

  return (
    <ul>
      {allPersons}
    </ul>
  )
}

const Person = ({person}) => {
  return (<li>{person.name} {person.number}</li>)
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
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilterName, setNewFilterName] = useState('')

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
      id: Math.max(...persons.map(p => p.id), 0) + 1
    }
    setPersons(persons.concat(person))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter newFilterName={newFilterName} handleFilterNameChange={handleFilterNameChange} />
      <h2>Add a new</h2>
      <PersonForm newName={newName} handleNameChange={handleNameChange}
       newNumber={newNumber} handleNumberChange={handleNumberChange}
       onNameSubmitted={onNameSubmitted} />
      <h2>Numbers</h2>
      <Persons persons={persons} filterName={newFilterName} />
    </div>
  )
}

export default App
