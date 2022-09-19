import App from "./App";
import React from 'react';
import ReactDOM from 'react-dom/client';
const Course = (props) => {
    const course = props.course
    // const parts = course.parts
    // console.log(parts[1])
    return(
        <div>
            <h1>{course.name}</h1>   
            <ul>
                {course.parts.map((part) => 
                    <li key={part.id}>
                        {part.name} {part.exercises}
                    </li>
                )}
            </ul>
        </div>
    )

}

export default Course