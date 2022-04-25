import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css'

const Statistics = (props) => {
  if (props.allClicks.length == 0){
    return(
      <div>
        <h1>{props.text}</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  
  return(
    <div>
      <h1>{props.text}</h1>
      <table>
        <tbody>
        <Statisticsline text = {'good'} value={props.good} />
        <Statisticsline text = {'neutral'} value={props.neutral} />
        <Statisticsline text = {'bad'} value={props.bad} />
        <Statisticsline text = {'positive'} value={props.positive} />
        </tbody>
      </table>
    </div>
    )

}

const Statisticsline = (props) => {
  return(
      <tr>
        <th>{props.text}: </th>
        <th>{props.value}</th>
      </tr>
    // <div>{props.text}: {props.value}</div>
  )
}

const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>{text}</button>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGood = (props) => {
    setAll(allClicks.concat('G'))
    console.log("Good")
    setGood(good + 1)
  }

  const handleNeutral= (props) => {
    setAll(allClicks.concat('N'))
    setNeutral(neutral + 1)
  }

  const handleBad = (props) => {
    setAll(allClicks.concat('B'))
    setBad(bad + 1)
  }
  // const [average, setAverage] = useState(0)
  // handleGoodClick
  // handleNeutralClilck
  // handleBadClick
  const positive = (good/(good+neutral+bad))*100 + "%"

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text='Good' />
      <Button handleClick={handleNeutral} text='Neutral' />
      <Button handleClick={handleBad} text='Bad' />
      {/* <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button> */}

      <Statistics text='Statistics' good={good} neutral={neutral} bad={bad} positive={positive} allClicks={allClicks}/>


      {/* <h1>Statistics</h1>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {good + neutral + bad}</p>
      {/* <p>average: {}</p> */}
      {/* <p>positive: {positive}</p> */}
    </div>
  )
}
export default App;
