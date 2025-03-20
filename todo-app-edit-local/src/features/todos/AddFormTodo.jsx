import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todosSlice";

function AddFormTodo() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) return;
    dispatch(addTodo(title));
    setTitle("");
  };
  return (
    <form className="flex justify-between" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Add task..."
        className="border-2 rounded p-3 w-[86%]"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="submit"
        className="w-[12%] border-2 p-3 rounded cursor-pointer font-medium"
      >
        Add
      </button>
    </form>
  );
}

export default AddFormTodo;
