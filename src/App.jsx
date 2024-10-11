import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const Person = ({ person }) => <p>{person.name} {person.number}</p>

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
        setFilterList(response.data)
      })
  }, [])
  const [filterList, setFilterList] = useState(persons)

  const addPerson = (newPerson) => {
    setPersons(persons.concat(newPerson))
    setFilterList(persons.concat(newPerson))
  }

  const handleFilter = (filterName) => {
    const filteredList_ = persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))
    setFilterList(filteredList_)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />
      <h1>add new</h1>
      <PersonForm addPerson={addPerson} persons={persons} />
      <h2>Numbers</h2>
      <Persons filterList={filterList} />
    </div>
  )
}
export default App
