import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, handleDelete}) => {

    return (
        <ul>
            {
            
            todos.map(todo => {
                <TodoListItem key={todo.id} todo={todo} handleDelete={handleDelete} />
            }) }
        </ul>
    );
}

export default TodoList;