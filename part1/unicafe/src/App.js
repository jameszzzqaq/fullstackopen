import { useState } from "react";

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}> {text} </button>
);

const Statistics = ({ data: { good, neutral, bad } }) => {
  const all = good.value + bad.value + neutral.value;
  const average = all === 0 ? 0 : (good.value - bad.value) / all;
  const positive = all === 0 ? 0 : (good.value * 100) / all + "%";

  if (all === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <table>
      <tbody>
        <StatisticLine text={good.name} value={good.value} />
        <StatisticLine text={neutral.name} value={neutral.value} />
        <StatisticLine text={bad.name} value={bad.value} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </tbody>
    </table>
  );
};

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td> <td>{value}</td>
  </tr>
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
    name: "bad",
    value: 0,
  });

  const increaseGood = () => setGood({ ...good, value: good.value + 1 });
  const increaseNeutral = () =>
    setNeutral({ ...neutral, value: neutral.value + 1 });
  const increaseBad = () => setBad({ ...bad, value: bad.value + 1 });

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={increaseGood} text={good.name} />
      <Button handleClick={increaseNeutral} text={neutral.name} />
      <Button handleClick={increaseBad} text={bad.name} />
      <h1>statistics</h1>
      <Statistics data={{ good, neutral, bad }} />
    </>
  );
};

export default App;
