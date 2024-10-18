import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import service from './services/numbers'
import axios from 'axios'

//const Person = ({ person }) => <p>{person.name} {person.number}</p>

const App = () => {
  const [persons, setPersons] = useState([])
  const [filterList, setFilterList] = useState(persons)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    service.getAll().then(initialData => {
      setPersons(initialData)
      setFilterList(initialData)
    })
  }, [])


  const addPerson = (newPerson) => {

    service.create(newPerson).then(responseNew => {
      setFilterList(persons.concat(responseNew))
      setPersons(persons.concat(responseNew))
      setMessage(`${newPerson.name} successfully added`)
      setTimeout(() => {
        setMessage(null)
      }, 2000)

    }
    )
  }

  const deletePerson = async (id) => {
    try {
      const findPerson = filterList.find(person => person.id == id)
      if (window.confirm(`Do you really want to delete ${findPerson.name}`)) {

        axios.delete(`http://localhost:3001/persons/${findPerson.id}`).then(response => {
          setFilterList(prevFilterList => prevFilterList.filter(person => person.id !== id));
          setPersons(prevFilterList => prevFilterList.filter(person => person.id !== id));


        })
      }
    } catch (error) {
      console.error("Error deleting person:", error);
    }
  };

  const updatePerson = (obj) => {
    service.update(obj.id, obj).then(updateData => {
      setFilterList(persons.map(person => person.id === obj.id ? updateData : person))
      setPersons(persons.map(person => person.id === obj.id ? updateData : person))
      setMessage(`${updateData.name} successfully added`)
      setTimeout(() => {
        setMessage(null)
      }, 2000)


    })
    console.log(obj)
  }



  const handleFilter = (filterName) => {
    const filteredList_ = persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))
    setFilterList(filteredList_)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter handleFilter={handleFilter} />
      <h1>add new</h1>
      <PersonForm addPerson={addPerson} persons={persons} setPersons={setPersons} updatePerson={updatePerson} />
      <h2>Numbers</h2>
      <Persons filterList={filterList} deletePerson={deletePerson} />
    </div>
  )
}
export default App
