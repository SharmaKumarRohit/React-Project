import { useDispatch } from "react-redux";
import { updateTodo, removeTodo, toggleCompleted } from "./todosSlice";
import { useState, useEffect, useRef } from "react";

function SingleTodo({ id, title, completed }) {
  const [editId, setEditId] = useState(null);
  const [editInput, setEditInput] = useState("");
  const editRef = useRef();
  useEffect(() => {
    if (editId === id && editRef.current) {
      editRef.current.focus();
    }
  }, [editId, id]);
  const dispatch = useDispatch();
  const handleEditTodo = (id, title) => {
    setEditId(id);
    setEditInput(title);
  };
  const handleUpdateTodo = () => {
    if (editInput.trim()) {
      dispatch(updateTodo({ id: editId, text: editInput }));
    }
    setEditId(null);
    setEditInput("");
  };
  return (
    <div className="border-2 my-4 p-4 rounded">
      {editId && editId === id ? (
        <>
          <div>
            <input
              type="text"
              className={`text-lg mr-2 mb-2 w-full lg:w-1/2 ${
                editId ? "border-2 rounded px-2" : null
              }`}
              ref={editRef}
              value={editInput}
              onChange={(e) => setEditInput(e.target.value)}
            />
          </div>
          <button
            className="border-2 px-4 py-1 rounded cursor-pointer mr-2"
            onClick={handleUpdateTodo}
          >
            Save Edit
          </button>
          <button
            className="border-2 px-4 py-1 rounded cursor-pointer"
            onClick={() => setEditId(null)}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <div className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              className="w-4 h-4"
              checked={completed}
              onChange={() => dispatch(toggleCompleted({ id }))}
            />
            <p className={`${completed ? "line-through" : "none"} text-lg`}>
              {title}
            </p>
          </div>
          <button
            className="border-2 px-4 py-1 rounded cursor-pointer mr-2"
            onClick={() => dispatch(removeTodo({ id }))}
          >
            Delete
          </button>
          {completed ? null : (
            <button
              className="border-2 px-4 py-1 rounded cursor-pointer"
              onClick={() => handleEditTodo(id, title)}
            >
              Edit
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default SingleTodo;
