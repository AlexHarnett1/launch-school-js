const Course = ({ course }) => {
  return (
    <>
      <Header course_name={course.name} />
      <Content parts={course.parts} />
    </>
  )
}

const Header = ({ course_name }) => {
  return (
    <>
      <h1>{course_name}</h1>
    </>
  )
}

const Content = ({ parts }) => {
  let parts_content = parts.map(part => (
    <Part key={part.id} name={part.name} exercises={part.exercises} />
  ));

  return (
    <div>
      {parts_content}
      <strong><Total parts={parts} /></strong>
    </div>
  )
}

const Part = ({ name, exercises }) => {
  return (<p>{name}: {exercises}</p>)
}

const Total = (props) => {
  let total = props.parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <>
      <p>total of {total} exercises</p>
    </>
  )
}

export default Course