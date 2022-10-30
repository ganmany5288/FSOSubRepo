import './App.css';
import Course from './Course';
import React from 'react';
import ReactDOM from 'react-dom/client';


const App = () => {
  const course = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      id: 2,
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlwares',
          exercises: 7,
          id: 2
        }
      ]
    }

  ]
  
  // console.log(course[0])

  return(
    <div>
      <Course courses={course[0]} />
      <Course courses={course[1]} />
    </div>
  )

}

export default App;
