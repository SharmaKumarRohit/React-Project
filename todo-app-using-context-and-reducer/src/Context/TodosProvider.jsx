import { createContext, useContext, useReducer, useEffect } from "react";

const TodosContext = createContext();
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
function TodosProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, initialTodos());
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", payload: { id } });
  };
  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
  };
  const addNewTodo = (newTodo) => {
    dispatch({ type: "ADD_TODO", payload: { newTodo } });
  };
  const handleEditTodo = (editId, editInput) => {
    dispatch({ type: "EDIT_TODO", payload: { id: editId, title: editInput } });
  };
  return (
    <TodosContext.Provider
      value={{ todos, handleDelete, handleToggle, addNewTodo, handleEditTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodosContext);
}

export default TodosProvider;
