import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoDetail from './TodoDetails';
import TodoList from './TodoList';
import './App.css';

function App() {

  const [selectedTodo, setSelectedTodo] = useState(null);
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  }, []);


  return (
    <div className="App">
      <div className='outerBox'>
        <TodoList todos={todos} setSelectedTodo={setSelectedTodo}/>
        <TodoDetail selectedTodo={selectedTodo} setTodos={setTodos} setSelectedTodo={setSelectedTodo}/>
      </div>
    </div>
  );
}

export default App;
