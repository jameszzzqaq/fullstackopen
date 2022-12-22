import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

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
      (person) =>
        person.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    );
  };

  const personToShow = filterByFilterName();

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        value={filterName}
        onChange={handleFilterNameChange}
      />
      <h3>add a new</h3>
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        setNewName={handleNewNameChange}
        newNumber={newNumber}
        setNewNumber={handleNewNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={personToShow} />
    </div>
  );
};

export default App;
