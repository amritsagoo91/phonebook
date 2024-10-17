import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import service from './services/numbers'
import axios from 'axios'

const Person = ({ person }) => <p>{person.name} {person.number}</p>

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    service.getAll().then(initialData => {
      setPersons(initialData)
      setFilterList(initialData)
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

  const deletePerson = async (id) => {
    try {
      const findPerson = filterList.find(person => person.id == id)
      if (window.confirm(`Do you really want to delete ${findPerson.name}`)) {

        axios.delete(`http://localhost:3001/persons/${findPerson.id}`).then(response => {
          setPersons(prevPersons => prevPersons.filter(person => person.id !== id));
          setFilterList(prevFilterList => prevFilterList.filter(person => person.id !== id));


        })
      }



    } catch (error) {
      console.error("Error deleting person:", error);
    }
  };

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
      <Persons filterList={filterList} deletePerson={deletePerson} />
    </div>
  )
}
export default App
