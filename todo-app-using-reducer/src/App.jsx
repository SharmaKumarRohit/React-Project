import { useEffect, useReducer } from "react";
import AddTodoForm from "./AddTodoForm";
import Todos from "./Todos";

function reducer(todos, action) {
  if (action.type === "DELETE_TODO") {
    return todos.filter((todo) => todo.id !== action.payload.id);
  }
  if (action.type === "ADD_TODO") {
    return [...todos, action.payload.newTodo];
  }
  if (action.type === "EDIT_TODO") {
    return todos.map((todo) =>
      todo.id === action.payload.id
        ? { ...todo, title: action.payload.title }
        : todo
    );
  }
  if (action.type === "TOGGLE_TODO") {
    return todos.map((todo) =>
      todo.id === action.payload.id
        ? { ...todo, completed: !todo.completed }
        : todo
    );
  }
  alert("Do not match any action type");
  return todos;
}
const initialTodos = () => {
  const localTodos = JSON.parse(localStorage.getItem("todos"));
  return localTodos && localTodos.length > 0
    ? localTodos
    : [
        { id: "1", title: "Todo 1", completed: false },
        { id: "2", title: "Todo 2", completed: true },
        { id: "3", title: "Todo 3", completed: false },
      ];
};
function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos());
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <div className="main-container">
        <h2 className="text-3xl uppercase text-center font-medium mb-4">
          Todo App
        </h2>
        <AddTodoForm dispatch={dispatch} />
        <Todos todos={todos} dispatch={dispatch} />
      </div>
    </>
  );
}

export default App;
