import {useState} from 'react'

const Button = (props) => {
  return <button onClick={props.handle}>{props.text}</button>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0,0,0])
  const [popular, setPop] = useState(0)

  const nextAnecdote = () => () => {
    setSelected(getRandom(8))
  }

  const addVote = () => () => {
    const copy = [...points]
    copy[selected] += 1
    if(copy[selected] > points[popular]) {
      setPop(selected)
    }
    setPoints(copy)
  }

  const getRandom = (max) => Math.floor(Math.random() * max)

  // const displayMost = () => 

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}<br></br>has {points[selected]} votes</div>
      <Button handle={addVote()} text = 'vote' />
      <Button handle={nextAnecdote()} text='next anecdote' />
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[popular]}<br></br>has {points[popular]} votes</div>
    </div>

  )
}

export default App