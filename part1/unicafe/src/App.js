import React, { useState } from 'react'


const Button = ({value, onClick}) => {
  return (
    <button onClick={onClick}>{value}</button>
  )
}

const Statistics = ({name, value}) => {
  return (
    <p>{name} {value}</p>
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
      <h1>{appName}</h1>
      <Button onClick={handleClickGood} value='good'/>
      <Button onClick={handleClickNeutral} value='neutral'/>
      <Button onClick={handleClickBad} value='bad'/>
      <h1>Statistics</h1>
      <Statistics name='good' value={good}/>
      <Statistics name='neutral' value={neutral}/>
      <Statistics name='bad' value={bad}/>

    </div>
  )
}

export default App