import React from 'react'



const Humans = ( {filterPersons, handleDeleteChange} ) => {
    return(
        <ul>
            {/* {console.log(filterPersons[0])}
            {console.log(filterPersons[0].name)}
            {console.log(filterPersons[0].id)}
            {console.log(filterPersons[0].phoneNumber)} */}

            {filterPersons.map(person =>
            // (event) => handleDeleteChange(event, person.id) <- not sure how or why this works but ok bro (FIGURE IT OUT)
            // {console.log(person)},
            <li key={person.id}>{person.name} {person.phoneNumber} <button onClick={(event) => handleDeleteChange(event, person.id)}>Delete</button></li>
            )}
            
        </ul>
    )
}

export default Humans
