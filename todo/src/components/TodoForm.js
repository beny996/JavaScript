import React from 'react';

const TodoForm = () => {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Add new Todo' />
        </form>
    )
}