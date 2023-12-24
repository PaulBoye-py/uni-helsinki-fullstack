import { useState } from "react";
import Statistics from "./components/Statistics";
import Button from "./components/Button";




const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));

  

  const handleSetGood = () => {
    setGood(good + 1);
  };

  const handleSetNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleSetBad = () => {
    setBad(bad + 1);
  };

  const handleAnecdoteClick = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
    // console.log(randomNumber)
  };

  const handleVote = () => {
    const newVote = [...vote];
    newVote[selected] += 1;
    setVote(newVote);
    // console.log(vote)
  };

  const maxValue = vote.reduce((max, current, index) => {
    if (current > vote[max]) {
      return index
    } else {
      return max
    }
  })

  


  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <>
        <div> 

          {/* Anecdote */}
          <h1>Anecdote of the day</h1>

          <p>{anecdotes[selected]}</p>
          <p>has {vote[selected]} votes</p>

        </div>

        <button onClick={handleVote}>vote</button>
        <button onClick={handleAnecdoteClick}>next anecdote</button>

        <h1>Anecdote with the most votes</h1>
        
        {maxValue === 0? <p></p> : <p>{anecdotes[maxValue]}</p>}

        {/* Statistics */}

        <h1>give feedback</h1>

        <Button handleClick={handleSetGood} text='good'/>
        <Button handleClick={handleSetNeutral} text='neutral'/>
        <Button handleClick={handleSetBad} text='bad'/>

        <h1>statistics</h1>

        <p>No feedback given</p>
      </>
      
    )
  }

  return (
    <>
      <div> 
       {/* Anecdote */}
          <h1>Anecdote of the day</h1>

          <p>{anecdotes[selected]}</p>
          <p>has {vote[selected]} votes</p>

        </div>

        <button onClick={handleVote}>vote</button>
        <button onClick={handleAnecdoteClick}>next anecdote</button>

        <h1>Anecdote with the most votes</h1>
        
        {maxValue === 0? <p></p> : <p>{anecdotes[maxValue]}</p>}

        {/* Statistics */}

      <h1>give feedback</h1>

      <Button handleClick={handleSetGood} text='good'/>
      <Button handleClick={handleSetNeutral} text='neutral'/>
      <Button handleClick={handleSetBad} text='bad'/>

      <h1>statistics</h1>

      <Statistics good={good} neutral={neutral} bad={bad}/>
      
    </>
  )
}

export default App


 



