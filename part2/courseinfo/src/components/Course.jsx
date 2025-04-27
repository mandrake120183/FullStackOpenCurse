const Header = ({ name }) => {
    return(
        console.log(name),
        <h1>{name}</h1>
    )
}

const Content = ({ parts }) => {
    return(
        <div>
            {parts.map(part => 
                <Part key={part.id} part={part} />
            )}
        </div>
    )
}

const Part = ({ part }) => {
    return(
        <p>{part.name} {part.exercises}</p>
    )
}   

const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return(
        <p>Number of exercises {total}</p>
    )
}

const Course = ({ course }) => {
    return(
        <div>
            <Header name="Web development curriculum" />
            {course.map(course =>
                <div key={course.id}>
                    <Header name={course.name} />
                    <Content parts={course.parts} />
                    <Total parts={course.parts} />
                </div>
            )}
        </div>
    )
}

export default Course