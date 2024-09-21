import React from 'react';

function TodoItem({ todo, onToggleComplete }) {
    return (
        <li style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}>
            <input
            type= "checkbox"
            checked={todo.completed}
            onChange={onToggleComplete} 
            />
            {todo.text}
        </li>
    );
}

export default TodoItem;