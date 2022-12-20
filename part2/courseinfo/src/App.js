const Course = ( {course} ) => {

  return <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
  </div>
}
const Header = (props) => {
  return (
    <div>
      <h1> {props.course}</h1>
    </div>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((p) => (
        <Part key={p.id} part={p} />
      ))}
    </div>
  );
};

const Part = ({ part }) => {
  return (
    <div>
      <p>  {part.name} {part.exercises} </p>
    </div>
  );
};



const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10, id: 1 },
      { name: "Using props to pass data", exercises: 7, id: 2 },
      { name: "State of a component", exercises: 14, id: 3 },
    ],
  };

  return <Course course={course} />;
};

export default App;
