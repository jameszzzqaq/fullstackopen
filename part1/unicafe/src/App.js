import { useState } from "react";

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}> {text} </button>
);

const Statistics = ({ good, neutral, bad }) => {
  const all = good.value + bad.value + neutral.value;
  const average = all === 0 ? 0 : (good.value - bad.value) / all;
  const positive = all === 0 ? 0 : (good.value * 100) / all + "%";
  
  if (all === 0) {
    return <div>No feedback given</div>
  }

  return (
    <div>
      <Display text={good.name} value={good.value} />
      <Display text={neutral.name} value={neutral.value} />
      <Display text={bad.name} value={bad.value} />

      <Display text="all" value={all} />
      <Display text="average" value={average} />
      <Display text="positive" value={positive} />
    </div>
  );
};

const Display = ({ text, value }) => (
  <div>
    {text} {value}
  </div>
);

const App = () => {
  const [good, setGood] = useState({
    name: "good",
    value: 0,
  });

  const [neutral, setNeutral] = useState({
    name: "neutral",
    value: 0,
  });

  const [bad, setBad] = useState({
    name: "neutral",
    value: 0,
  });

  const increaseGood = () => setGood({ ...good, value: good.value + 1 });
  const increaseNeutral = () =>
    setNeutral({ ...neutral, value: neutral.value + 1 });
  const increaseBad = () => setBad({ ...bad, value: bad.value + 1 });

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={increaseGood} text={good.name} />
      <Button handleClick={increaseNeutral} text={neutral.name} />
      <Button handleClick={increaseBad} text={bad.name} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
