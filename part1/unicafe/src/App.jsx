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

const Total = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  return <p>Total: {total}</p>
}

const Anecdote = ({ text }) => {
  return <p>{text}</p>
} 

const AnecdoteButton = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const AnecdoteOfTheDay = ({ anecdote }) => {
  return (
    <div>
      <Anecdote text={anecdote} />
      <AnecdoteButton onClick={() => alert('You clicked the button!')} text="Vote" />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an overall plan is the same as building a plane during flight.'
] 

const randomAnecdote = () => {
  return anecdotes[Math.floor(Math.random() * anecdotes.length)]
}

const randomAnecdoteText = randomAnecdote()
const randomAnecdoteText2 = randomAnecdote()  // Genera un nuevo texto aleatorio para el segundo botón
const randomAnecdoteText3 = randomAnecdote()  // Genera un nuevo texto aleatorio para el tercer botón   
const randomAnecdoteText4 = randomAnecdote()  // Genera un nuevo texto aleatorio para el cuarto botón
const randomAnecdoteText5 = randomAnecdote()  // Genera un nuevo texto aleatorio para el quinto botón 
const randomAnecdoteText6 = randomAnecdote()  // Genera un nuevo texto aleatorio para el sexto botón
const randomAnecdoteText7 = randomAnecdote()  // Genera un nuevo texto aleatorio para el séptimo botón  


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
       <Total good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App