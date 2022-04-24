import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Statistics = (props) => {
  return(
    <div>
      <h1>{props.title}</h1>
      <p>good: {props.good}</p>
      <p>neutral: {props.neutral}</p>
      <p>bad: {props.bad}</p>
      <p>positive: {props.positive}</p>
    </div>
    )

}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // const [average, setAverage] = useState(0)
  // handleGoodClick
  // handleNeutralClilck
  // handleBadClick
  const positive = (good/(good+neutral+bad))*100 + "%"

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>

      <Statistics text='Statistics' good={good} neutral={neutral} bad={bad} positive={positive}/>


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
