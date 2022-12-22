import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  const handleNewNameChange = (event) => setNewName(event.target.value);
  const handleNewNumberChange = (event) => setNewNumber(event.target.value);
  const handleFilterNameChange = (event) => setFilterName(event.target.value);

  const addPerson = (event) => {
    event.preventDefault();
    console.log("no event prevent");
    const newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons(persons.concat(newPerson));
    setNewName("");
    setNewNumber("");
  };

  const filterByFilterName = () => {
    if (filterName === "") {
      return persons;
    }
    return persons.filter(
      (person) => person.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    );
  };
  const personToShow = filterByFilterName();

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        find shown with <input onChange={handleFilterNameChange} />
      </div>
      <h3>add a new</h3>
      <form onSubmit={addPerson}>
        <div>
          {" "}
          name: <input value={newName} onChange={handleNewNameChange} />{" "}
        </div>
        <div>
          {" "}
          number: <input value={newNumber} onChange={handleNewNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personToShow.map((person) => (
        <div key={person.name}>
          {person.name}: {person.number}
        </div>
      ))}
    </div>
  );
};

export default App;
