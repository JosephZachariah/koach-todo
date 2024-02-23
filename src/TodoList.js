import React from 'react';
import TodoItem from './TodoItem';

function TodoList({setSelectedTodo,todos}) {

  return (
    <div className="todo-list">
      <div className='list-items'>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} setSelectedTodo={setSelectedTodo}/>
      ))}
    </div>
    </div>
  );
}

export default TodoList;
