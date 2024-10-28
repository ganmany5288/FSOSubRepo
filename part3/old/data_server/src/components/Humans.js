import { useState } from "react";

import React, { Component } from 'react'



const Humans = ( {filterPersons} ) => {
    return(
        <ul>
            {filterPersons.map(person =>
            <li key={person.id}>{person.name} {person.phoneNumber}</li>
            )}
        </ul>
    )
}

export default Humans
