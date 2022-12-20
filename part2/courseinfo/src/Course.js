const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};
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
      <p>
        {" "}
        {part.name} {part.exercises}{" "}
      </p>
    </div>
  );
};

const Total = ({ parts }) => {
  return (
    <div>
      <b>total of {parts.reduce((p, c) => p + c.exercises, 0)} exercises</b>
    </div>
  );
};


export default Course;