import React from 'react'

function Persons({ filterList, deletePerson }) {
    return (
        <ul>
            {
                filterList.map(person =>

                    <li key={person.id}>{person.name} {person.number}{" "}<button onClick={()=>deletePerson(person.id)}>Delete</button></li>
                )
            }
        </ul>
    )
}

export default Persons