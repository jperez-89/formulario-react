import React from 'react';
import { ItemTodo } from "./ItemTodo";

export const ListTodo = ({ todos, handleDeleteTodo, handleCompleteTodo }) => {
    // console.log("ListTodo.jsx");
    // console.log(todos);

    return (
        <>
            {todos.map(todo =>
                <ItemTodo key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo} />
            )}
        </>
    );
}