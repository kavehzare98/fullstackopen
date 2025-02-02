const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part_num} {props.num_exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
  <div>
    <Part part_num={props.part1} num_exercises={props.exc1} />
    <Part part_num={props.part2} num_exercises={props.exc2} />
    <Part part_num={props.part3} num_exercises={props.exc3} />
  </div>
  )
}

const Total = (props) => {
  return (
    <div>
        <p>Number of exercises {props.exc1 + props.exc2 + props.exc3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const parts_and_exercises = [
    {part_name: 'Fundamentals of React', num_exercises: 10},
    {part_name: 'Using props to pass data', num_exercises: 7},
    {part_name: 'State of a component', num_exercises: 14}
  ]

  return (
    <div>
      <Header name={course} />
      <Content
        part1={parts_and_exercises[0].part_name} 
        part2={parts_and_exercises[1].part_name} 
        part3={parts_and_exercises[2].part_name} 
        exc1={parts_and_exercises[0].num_exercises}
        exc2={parts_and_exercises[1].num_exercises} 
        exc3={parts_and_exercises[2].num_exercises} 
        />
      <Total exc1={parts_and_exercises[0].num_exercises} exc2={parts_and_exercises[1].num_exercises} exc3={parts_and_exercises[2].num_exercises} />
    </div>
  )
}

export default App