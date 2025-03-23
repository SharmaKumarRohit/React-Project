import { useState } from "react";
import { v4 as uuid } from "uuid";

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim().length === 0) {
      alert("Please fill the input field");
      return;
    }
    const newTodo = {
      id: uuid(),
      title,
      completed: false,
    };
    addTodo(newTodo);
    setTitle("");
  }
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todoForm__input"
        placeholder="Add task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="todoForm__btn">Add</button>
    </form>
  );
}

export default TodoForm;
