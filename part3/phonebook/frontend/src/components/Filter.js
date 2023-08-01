import React from 'react'


const Filter = ({filterAll ,handleFilterChange, handleFilterSearch}) => {
    return(
        <div>
            Filter by: <input value={filterAll} onChange={handleFilterChange} />
            <button type='submit' onClick={handleFilterSearch}>Search</button>
        </div>
    )
}

export default Filter
