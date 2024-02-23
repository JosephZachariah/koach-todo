import React from 'react';
import axios from 'axios';

function TodoDetail({ selectedTodo, setTodos,setSelectedTodo }) {

    console.log("was here=", selectedTodo);


    const handleDelete = () => {
        axios.patch(`https://jsonplaceholder.typicode.com/todos/${selectedTodo.id}`)
        .then(() => {
            setTodos(prevTodos => prevTodos.filter(todo => todo.id !== selectedTodo.id));
            setSelectedTodo(null);
        })
        .catch(error => {
            console.error('Error deleting todo:', error);
        });
    };

    const handleCompleted = () => {

        const mutatedData = { ...selectedTodo, completed: true };

            axios.patch(`https://jsonplaceholder.typicode.com/todos/${selectedTodo.id}`, mutatedData)
            .then(() => {
                // Update selectedTodo with the modified todo item
                setSelectedTodo(prevSelectedTodo => ({ ...prevSelectedTodo, completed: true }));
    
                // Update todos state to reflect the changes
                setTodos(prevTodos => prevTodos.map(todo => {
                    if (todo.id === selectedTodo.id) {
                        return { ...todo, completed: true };
                    }
                    return todo;
                }));
            })
            .catch(error => {
                console.error('Error marking todo as completed:', error);
            });

    };

    return (
        <div className="todo-detail">
            {selectedTodo ? (
                <div className='selected-todo'>
                    <div className='selected-info'>
                    <p><strong>Title:</strong> {selectedTodo.title}</p>
                    <p><strong>User ID:</strong> {selectedTodo.id}</p>
                    <p><strong>Completed:</strong> {selectedTodo.completed ? 'Yes' : 'No'}</p>
                    </div>
                    <div className='selected-button'>
                        <button onClick={handleDelete} className='delete-button'>Delete</button>
                        <button onClick={handleCompleted} className='completed-button'>Completed</button>
                    </div>
                </div>
            ) : (
                <p>Select a Task</p>
            )}
        </div>
    );
}

export default TodoDetail;
