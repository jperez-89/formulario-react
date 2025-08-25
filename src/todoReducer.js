export const todoReducer = (state, action) => {
  // export const todoReducer = ({ navBar, todoList }, action) => {
  switch (action.type) {
    case "TAB":
      console.log("todoReducer - TAB");
      return [...state, action.payload];

    case "NEW":
      console.log("todoReducer - New");
      // console.log("state");
      // console.log(state);

      // console.log("action");
      // console.log(action);

      // return [state.navBar, ...state.todoList, action.payload];
      return [...state, action.payload];

    case "DONE":
      console.log("todoReducer - Done");
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done };
        }

        return todo;
      });

    case "DELETE":
      console.log("todoReducer - Delete");
      return state.filter((todo) => todo.id !== action.payload);

    case "UPDATE":
      console.log("todoReducer - Update");
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, description: action.payload.description };
        }

        return todo;
      });

    default:
      console.log("todoReducer - Default");
      return state;
  }
};
