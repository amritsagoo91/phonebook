import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import service from './service/numbers'

const Person = ({ person }) => <p>{person.name} {person.number}</p>

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {

    service.getAll().then(intialData => {
      setPersons(intialData)
      setFilterList(intialData)
    })

  }, [])
  const [filterList, setFilterList] = useState(persons)

  const addPerson = (newPerson) => {
    service.create(newPerson).then(responseNew => {
      setPersons(persons.concat(responseNew))
      setFilterList(persons.concat(responseNew))
    }
    )
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
