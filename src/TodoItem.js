import React from 'react';

function TodoItem({ todo, setSelectedTodo }) {

  return (
    <div className="todo-item" onClick={()=>setSelectedTodo(todo)}>
      {todo.title}
      {/* Add delete/mark completed buttons */}
    </div>
  );
}

export default TodoItem;
