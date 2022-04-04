
// import './App.css';
import Content from './Content';
import Header from './Header';
import Total from './Total';

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old!</p>
    </div>
  )
}


const App = () => {


  const courseFinal = {
    name: 'Half Stack Application Development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using Props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const course = 'Half Stack Application Development'

  const partsFinal = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of component',
      exercises: 14 
    }
  ]

  const part1v1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2v1 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3v1 = {
    name: 'State of a component',
    exercises: 14
  }




  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={courseFinal} />
      <Content content={courseFinal} />
      <Total total={courseFinal.parts[0].exercises+courseFinal.parts[1].exercises+courseFinal.parts[2].exercises} />
    </div>
  )
}



export default App