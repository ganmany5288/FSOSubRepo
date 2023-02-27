import React from 'react'


const Phonebook = ({addPerson, newName, newPhoneNumber, handlePersonChange, handlePhoneChange}) => {
    return(
        <div>
            <form onSubmit={addPerson}>
                <div>
                    Name: <input value={newName} onChange={handlePersonChange} />
                </div>
                <div>
                    Phone Number: <input value={newPhoneNumber} onChange={handlePhoneChange} />
                </div>
                <div>
                    <button type='submit'>Add</button>
                </div>
            </form>
        </div>
    )
}

export default Phonebook
