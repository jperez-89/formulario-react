import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";

export const useTodo = () => {
  // const initialState = {
  //   todoList: [],
  //   navBar: "todos",
  // };

  const initialState = [];

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

  const handleTab = (tab) => {
    const action = {
      type: "TAB",
      payload: tab,
    };

    // console.log("useTodo - handleTab");
    dispatchTodo(action);
    // console.log(action);
  };

  const handleNewTodo = (todo) => {
    const action = {
      type: "NEW",
      payload: todo,
    };

    console.log("useTodo - handleNewTodo");
    dispatchTodo(action);
    // console.log("todoooos");
    // console.log(todos);
  };

  const handleCompleteTodo = (todo) => {
    console.log(todo);

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
    handleTab,
    todos,
    todosCount,
    pendingTodos,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  };
};
