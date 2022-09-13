import React, { useState } from 'react';

const MostVotes = (props) =>{
  if (props.check === false){
    return (
      <div>
        <h1>Anecdote with most votes</h1>
        <p>No vote has been processed.</p>
      </div>
    )
  }
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{props.quote}</p>
      <p>has {props.vote} votes</p>
    </div>
  )
}


const App = () => {
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]


  //Difference between using useState or directly setting up points array?
  // const [points, setPoints] = useState([])

  const n = anecdotes.length
  // points = Array(n).fill(0)
  // console.log(points)
  // const index = Math.floor((Math.random()*anecdotes.length))
  const [points, setPoints] = useState(Array(n).fill(0))
  const [selected, setSelected] = useState(0)
  const [voteCheck, setVoteCheck] = useState(false)
  const [popular, setPopular] = useState(0)
  // const popular = 0


  const handleSelect = (props) => {
    // Setting selected variable to be the value returned by the randomized index (concrete value, not random)
    const index = Math.floor((Math.random()*anecdotes.length))
    console.log(index)
    setSelected(index)
  }

  const handleVote = (props) => {
    // points[index] += 1
    const copy = [...points]
    // console.log(copy)
    copy[selected] += 1
    setPoints(copy)
    // Interesting behaviour happening here, it seems like setPoints isn't updating points in real time, causing popular to lag behind by 1
    // console.log(copy)
    // console.log(points)
    // console.log(Math.max(...points))
    setVoteCheck(true)
    setPopular(Math.max(...copy))
  }

  return (
      <div>
          <h1>Anecdote of the day</h1>
          <p>{anecdotes[selected]}</p>
          <p>has {points[selected]} votes</p>
          {/* Why does the buttons below not go ontop of each other instead it goes side by side */}
          <button onClick={handleSelect}>next anecdote</button>
          <button onClick={handleVote}>vote</button>

          <MostVotes vote={popular} check = {voteCheck} quote={anecdotes[points.indexOf(popular)]} points={popular} />
      </div>
  )
}
export default App;
