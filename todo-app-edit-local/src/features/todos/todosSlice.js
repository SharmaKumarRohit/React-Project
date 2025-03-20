import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = () => {
  const todos = JSON.parse(localStorage.getItem("todos"));
  return todos && todos.length > 0
    ? todos
    : [
        { id: "12df", title: "Play Cricket", completed: false },
        { id: "34gh", title: "Play Chess", completed: true },
      ];
};
const todosSlice = createSlice({
  name: "todos",
  initialState: initialState(),
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        console.log("reducer run", action);
        state.push(action.payload);
        localStorage.setItem("todos", JSON.stringify(state));
      },
      prepare: (title) => {
        console.log("prepare run");
        return {
          payload: {
            id: nanoid(),
            title: title,
            completed: false,
          },
        };
      },
    },
    updateTodo: (state, actions) => {
      const { id, text } = actions.payload;
      const updatedTodo = state.map((todo) =>
        todo.id === id ? { ...todo, title: text } : todo
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodo));
      return updatedTodo;
    },
    removeTodo: (state, actions) => {
      const filteredTodos = state.filter(
        (todo) => todo.id !== actions.payload.id
      );
      localStorage.setItem("todos", JSON.stringify(filteredTodos));
      return filteredTodos;
    },
    toggleCompleted: (state, actions) => {
      const toggledTodos = state.map((todo) =>
        todo.id === actions.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(toggledTodos));
      return toggledTodos;
    },
  },
});

export const { addTodo, updateTodo, removeTodo, toggleCompleted } =
  todosSlice.actions;

export default todosSlice.reducer;
