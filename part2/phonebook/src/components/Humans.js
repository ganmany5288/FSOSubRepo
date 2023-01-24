import React from 'react'



const Humans = ( {filterPersons, handleDeleteChange} ) => {
    return(
        <ul>
            {filterPersons.map(person =>
            // (event) => handleDeleteChange(event, person.id) <- not sure how or why this works but ok bro (FIGURE IT OUT)
            <li key={person.id}>{person.name} {person.phoneNumber} <button onClick={(event) => handleDeleteChange(event, person.id)}>Delete</button></li>
            )}
        </ul>
    )
}

export default Humans
