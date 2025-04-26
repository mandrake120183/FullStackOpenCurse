import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / total || 0
  const positive = (props.good / total) * 100 || 0

  if (total === 0) {
    return <p>No feedback given</p>
  }

  return (
    <table>
      <tbody>
        <Statistic text="good" value={props.good} />
        <Statistic text="neutral" value={props.neutral} />
        <Statistic text="bad" value={props.bad} />
        <Statistic text="all" value={total} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={`${positive} %`} />
      </tbody>
    </table>
  )
}

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Header = ({ text }) => {
  return <h1>{text}</h1>
}

const App = () => {

  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  } 
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
       <Header text="Give Feedback" />
       <Button onClick={handleGoodClick} text="Good" />
       <Button onClick={handleNeutralClick} text="Neutral" /> 
       <Button onClick={handleBadClick} text="Bad" />
       <Header text="Statistics" />
       <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App