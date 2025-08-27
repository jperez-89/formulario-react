import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "../todoReducer";

export const useTodo = () => {
  const initialState = [];
  const initialFormTodo = [];

  const [formTodo, setFormState] = useState(initialFormTodo);

  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormState({
      ...formTodo,
      [name]: value,
    });
  };

  const onResetFormTodo = () => setFormState(initialFormTodo);

  // Obtenemos los todos del localStorage, si no hay todos, retorna un array vacio
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];

    // return [
    //   { id: new Date().getTime(), description: "description", done: false },
    // ];
  };

  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

  const todosCount = todos.length;

  const pendingTodos = todos.filter((todo) => !todo.done).length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "NEW",
      payload: todo,
    };

    console.log("useTodo - handleNewTodo");
    dispatchTodo(action);
  };

  const handleCompleteTodo = (todo) => {
    const action = {
      type: "DONE",
      payload: todo.id,
    };

    dispatchTodo(action);
    console.log("useTodo - handleCompleteTodo");
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "DELETE",
      payload: id,
    };

    dispatchTodo(action);
    console.log("useTodo - handleDeleteTodo");
  };

  const handleUpdateTodo = (id, description) => {
    const action = {
      type: "UPDATE",
      payload: { id, description },
    };

    dispatchTodo(action);
    console.log("useTodo - handleUpdateTodo");
  };

  return {
    ...formTodo,
    formTodo,
    onInputChange,
    onResetFormTodo,
    todos,
    todosCount,
    pendingTodos,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  };
};
