import { useState, useEffect } from "react";
import { fetchTodos } from "./todosSlice";
import { useDispatch, useSelector } from "react-redux";
import SingleTodo from "./SingleTodo";

function TodoList() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { data: todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchTodos())
      .unwrap()
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <div>
      {todos.map((todo) => (
        <SingleTodo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
