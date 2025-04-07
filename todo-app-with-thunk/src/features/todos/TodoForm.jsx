import { useState } from "react";
import { addTodo } from "./todosSlice";
import { useDispatch } from "react-redux";

function TodoForm() {
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    dispatch(addTodo(title))
      .unwrap()
      .then(() => {
        setTitle("");
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" disabled={isLoading} className="ml">
        {isLoading ? "adding ..." : "add"}
      </button>
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </form>
  );
}

export default TodoForm;
