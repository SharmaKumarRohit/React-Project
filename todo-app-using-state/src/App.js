import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos"));
    return localTodos && localTodos.length > 0
      ? localTodos
      : [
          { id: 1, title: "Todo 1", completed: false },
          { id: 2, title: "Todo 2", completed: true },
          { id: 3, title: "Todo 3", completed: false },
        ];
  });
  const addTodo = (newTodo) => {
    setTodos((prevTodo) => [...prevTodo, newTodo]);
  };
  const handleEdit = (editId, editInput) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return todo.id === editId ? { ...todo, title: editInput } : todo;
      })
    );
  };
  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const handleRemove = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <div className="container">
        <h1>Todo App</h1>
        <TodoForm addTodo={addTodo} />
        <Todos
          todos={todos}
          handleToggle={handleToggle}
          handleRemove={handleRemove}
          handleEdit={handleEdit}
        />
      </div>
    </>
  );
}

export default App;
