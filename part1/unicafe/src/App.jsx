import {useState} from 'react'

const Button = (props) => <button onClick={props.handler}>{props.text}</button>

const Statistics = (props) => {
  if(props.total > 0)
    return (
      <div>
        <h1>statistics</h1>
        <StatisticLine text='good' value={props.good} />
        <StatisticLine text='neutral' value={props.neutral} />
        <StatisticLine text='bad' value={props.bad} />
        <StatisticLine text='all' value={props.total} />
        <StatisticLine text='average' value={(props.good - props.bad) / props.total} />
        <StatisticLine text='positive' value={props.good / props.total * 100} />
      </div>
    )
  return <p>No feedback given</p>
}

const StatisticLine = (props) => {
  if(props.text === 'positive') return (<div>{props.text} {props.value} %</div>)
  return (<div>{props.text} {props.value}</div>)
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const newFeedback = (state, setterS, total, setterT) => () => {
    setterT(total + 1)
    return setterS(state + 1)
  }
  

  return (
    <div>
      <h1>give feedback</h1>
      <Button handler={newFeedback(good, setGood, total, setTotal)} text='good' />
      <Button handler={newFeedback(neutral, setNeutral, total, setTotal)} text='neutral' />
      <Button handler={newFeedback(bad, setBad, total, setTotal)} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App
