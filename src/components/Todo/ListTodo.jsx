import { ItemTodo } from "./ItemTodo";

export const ListTodo = ({ todos, handleDeleteTodo, handleCompleteTodo }) => {
    return (
        <>
            {todos.map(todo =>
                <ItemTodo key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo} />
            )}
        </>
    );
}