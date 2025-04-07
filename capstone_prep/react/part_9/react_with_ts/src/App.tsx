interface HeaderTypes {
  courseName: String
}

interface ContentTypes {
  courseParts: CoursePart[]
}

interface CoursePart {
  name: String,
  exerciseCount: Number
}

const Header = (props: HeaderTypes) => {
  return (<><h1>{props.courseName}</h1></>)
}

const Content = (props: ContentTypes) => {
  const content = props.courseParts.map(coursePart => {
    return <p>{coursePart.name} {String(coursePart.exerciseCount)}</p>
  })
  return (content)
}

const Total = ({ total }: { total: Number }) => {
  return (<p>Number of exercises {String(total)}</p>)
}

const App = () => {
  const courseName = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  const totalExercises = courseParts.reduce((sum, part) => sum + part.exerciseCount, 0);

  return (
    <div>
      <Header courseName={courseName} />
      <Content courseParts={courseParts} />
      <Total total={totalExercises} />
    </div>
  );
};

export default App;