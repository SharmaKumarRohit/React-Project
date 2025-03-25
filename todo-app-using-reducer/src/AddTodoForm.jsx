import { useState } from "react";

function AddTodoForm({ dispatch }) {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      alert("type something...");
      return;
    }
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    dispatch({ type: "ADD_TODO", payload: { newTodo } });
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit} className="md:flex md:gap-3 md:items-center">
      <input
        type="text"
        placeholder="Add task..."
        className="border-2 rounded w-full md:w-[90%] p-3 mb-4 md:mb-0"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="border-2 w-full md:w-[10%] p-3 rounded">
        Submit
      </button>
    </form>
  );
}

export default AddTodoForm;
