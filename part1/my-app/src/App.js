import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  

  return (
    <div>
      <h1>Give Feedback</h1>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
      <h1>Statistics</h1>
      <p onClick={() => setGood(good + 1)}>good: {good}</p>
      <p onClick={() => setNeutral(neutral + 1)}>neutral: {neutral}</p>
      <p onClick={() => setBad(bad + 1)}>bad: {bad}</p>
    </div>
  )
}
export default App;
