import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
<<<<<<< HEAD
import service from './service/numbers'
=======
import service from './services/numbers'
>>>>>>> 4d6f9cf (2.12: The Phonebook step 7)

const Person = ({ person }) => <p>{person.name} {person.number}</p>

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
<<<<<<< HEAD

    service.getAll().then(intialData => {
      setPersons(intialData)
      setFilterList(intialData)
    })

=======
    service.getAll().then(response => {
      setPersons(response.data)
      setFilterList(response.data)
    })
>>>>>>> 4d6f9cf (2.12: The Phonebook step 7)
  }, [])
  const [filterList, setFilterList] = useState(persons)

  const addPerson = (newPerson) => {
<<<<<<< HEAD
    service.create(newPerson).then(responseNew => {
      setPersons(persons.concat(responseNew))
      setFilterList(persons.concat(responseNew))
=======
    service.create(newPerson).then(response => {
      setPersons(persons.concat(response.data))
      setFilterList(persons.concat(response.data))
>>>>>>> 4d6f9cf (2.12: The Phonebook step 7)
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
