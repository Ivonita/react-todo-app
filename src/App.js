import React, { useState } from 'react';
import './App.css';
import TodoItem from './TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // for adding a todo
  const handleAddTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput('');
    }
  }

  // Handling input Changes. This function updates the input state whenever the user types in the input field.
  const handleChange = (event) => {
    setInput(event.target.value); // captures the current value of the input.
  }

  // den done-Status einer Aufgabe umschalten
  const handleToggleComplete = (index) => {
    const newTodos = [...todos]; // Kopie des todo-Arrays erstellen
    newTodos[index].completed = !newTodos[index].completed; // ob das todo erledigt(true) oder nicht erledigt(false)
    setTodos(newTodos); // den neuen todos-Zustand erstellen
  }

  // Funktion zum Löschen der Aufgabe
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1); // Entfern das todo an der angegebenen Position
    setTodos(newTodos); // aktualisiert die State-Liste
  }



  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder='Add a new todo'
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem 
          key={index} 
          todo={todo}
          onToggleComplete={() => handleToggleComplete(index)} 
          onDelete={() => handleDeleteTodo(index)} // Übergabe die Löschfunktion als Prop
          />
        ))}
      </ul>
    </div>
  );
}

export default App;