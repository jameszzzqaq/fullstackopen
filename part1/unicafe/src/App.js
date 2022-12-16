import { useState } from "react";

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}> {text} </button>
);

const Display = ({ text, value }) => (
  <div>
    {text} {value}
  </div>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  const all = good + bad + neutral;
  const average = (all === 0? 0: (good - bad) / all);
  const positive = (all === 0? 0: good * 100 / all + "%");

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={increaseGood} text="good" />
      <Button handleClick={increaseNeutral} text="neutral" />
      <Button handleClick={increaseBad} text="bad" />
      <h1>statistics</h1>
      <Display text="good" value={good}/>
      <Display text="neutral" value={neutral}/>
      <Display text="bad" value={bad}/>
      <Display text="all" value={all} />
      <Display text="average" value={average} />
      <Display text="positive" value={positive} />
    </div>
  );
};

export default App;
