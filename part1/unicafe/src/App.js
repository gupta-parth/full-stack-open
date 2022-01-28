import React, { useState } from 'react'

const Header = ({name}) => <h1>{name}</h1>

const Button = ({value, onClick}) => {
  return (
    <button onClick={onClick}>{value}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr><td>{text} {value}</td></tr>
  )
}

const Statistics = (props) => {
  const sum = props.good + props.neutral + props.bad
  const avg = (props.good * 1 + props.bad * -1)/sum 
  const positive = props.good * (100/sum)
  
  if (sum === 0) {
    return <p>No feedback given</p>
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good}/>
          <StatisticLine text="neutral" value={props.neutral}/>
          <StatisticLine text="bad" value={props.bad}/>
          <StatisticLine text="all" value={sum}/>
          <StatisticLine text="average" value={avg}/>
          <StatisticLine text="positive" value={positive}/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const appName = "give feedback"

  const handleClickGood = () => setGood(good + 1)
  const handleClickNeutral = () => setNeutral(neutral + 1)
  const handleClickBad = () => setBad(bad + 1)

  return (
    <div>
      <Header name={appName}/>
      <Button onClick={handleClickGood} value='good'/>
      <Button onClick={handleClickNeutral} value='neutral'/>
      <Button onClick={handleClickBad} value='bad'/>
      <Header name="Statistics"/>
      <Statistics good={good} bad={bad} neutral={neutral}/>

    </div>
  )
}

export default App