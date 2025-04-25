import { useState } from "react"

const Display = ({counter}) => {
  return(
    <div>{counter}</div>
  )
}

const handleClick = () => {
  setAll(allClicks.concat('R'))
  setRight(right + 1)
  se
  tTotal(left + right)
}
const Button = ({handleClick,text}) => {
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    console.log('left before', left)
    const updateLeft = left + 1
    setLeft(updateLeft)
    console.log('left after', updateLeft)
    setTotal(updateLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updateRight = right + 1
    setRight(updateRight)
    setTotal(left + updateRight)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' - ')}</p>
      <p>total {total}</p>
      <History allClicks={allClicks} />
    </div>
  )
}

export default App