import App from "./App";
import React from 'react';
import ReactDOM from 'react-dom/client';
const Course = (props) => {
    const course = props.courses
    console.log(props)
    // Using map() and reduce() here
    const initVal = 0
    var test = course.parts.reduce((pV,cV) => 
        pV + cV.exercises, initVal 
    )
    return(
        <div>
            <h1>{course.name}</h1>
            {course.parts.map((part) => 
                    <p key={part.id}>
                        {part.name} {part.exercises}
                    </p>
            )}
            <b><p>total of exercises: {test}</p></b>
        </div>
    )

}

export default Course