import React from 'react';

const Part = (props) => {
    return (
        <div>
            <p>Part {props.num}: {props.part} {props.exercises}</p>
        </div>
    )
}

export default Part;