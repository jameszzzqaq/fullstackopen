import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);

  const [newName, setNewName] = useState('');

  const handleNewNameChange = (event) => setNewName(event.target.value);

  const addPerson = (event) => {
    event.preventDefault();
    console.log('no event prevent');
    const newPerson = {
      name: newName
    };

    setPersons(persons.concat(newPerson));
    setNewName('');
    console.log("button clicked", event.target);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <div key={person.name}>{person.name}</div>)}
      
    </div>
  )
}

export default App