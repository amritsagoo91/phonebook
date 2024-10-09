import React from 'react'

function Persons({ filterList }) {
    return (
        <ul>
            {
                filterList.map(person =>

                    <li key={person.id}>{person.name} {person.number}</li>
                )
            }
        </ul>
    )
}

export default Persons