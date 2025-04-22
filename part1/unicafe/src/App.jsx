const Header = (props) =>{
  console.log('Estamos en Header')
  console.log(props)
  return(
    <div>
      <h1>
          {props.course}
      </h1>
    </div>
  )
}

const Part = (props) => {
  console.log('Estamos en Part')
  console.log(props)
  return(
    <div>
      <p>
        {props.parte} {props.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  console.log('Estamos en Content')
  console.log(props)
  return(
    <div>
      <Part parte={props.parte1} exercises={props.exercises1}/>
      <Part parte={props.parte2} exercises={props.exercises2}/>
      <Part parte={props.parte3} exercises={props.exercises3}/>
    </div>
  )
}

const Total = (props) => {
  console.log('Estamos en Total')
  console.log(props)
  return(
    <div>
      <p>
        Number of exercises {props.total}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
        <Content parte1={part1} exercises1={exercises1} parte2={part2} exercises2={exercises2} parte3={part3} exercises3={exercises3}/>
        <Total total= {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App