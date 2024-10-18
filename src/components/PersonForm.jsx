import React from 'react'
import { useState } from 'react'

function PersonForm({ addPerson, persons, updatePerson }) {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        let exist = persons.find(person => person.name.toLowerCase().trim() === newName.toLowerCase().trim())

        if (exist) {
            if (window.confirm(`${newName} is already added to phonebok,replace the new number with old number`)) {
                const updatePersonObj = { ...exist, id: exist.id, name: newName, number: newNumber }
                updatePerson(updatePersonObj)
                setNewName('')
                setNewNumber('')
            }
        } else {
            const newPersonObject = { name: newName, number: newNumber }
            addPerson(newPersonObject)
            setNewName('')
            setNewNumber('')
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    name: <input value={newName} onChange={e => setNewName(e.target.value)} />
                </div>
                <br />
                number: <input value={newNumber} onChange={e => setNewNumber(e.target.value)} />
                <br />
                <button type="submit">add</button>

            </form>
        </>
    )
}

export default PersonForm