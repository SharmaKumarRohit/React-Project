import { useEffect, useRef, useState } from "react";

function Todo({ id, title, completed, dispatch }) {
  const [editId, setEditId] = useState(null);
  const [editInput, setEditInput] = useState(null);
  const editInputRef = useRef();
  useEffect(() => {
    if (editId === id && editInputRef.current) editInputRef.current.focus();
  }, [editId, id]);
  const handleDelete = () => {
    dispatch({ type: "DELETE_TODO", payload: { id } });
  };
  const handleToggle = () => {
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
  };
  const handleEdit = () => {
    setEditId(id);
    setEditInput(title);
  };
  const handleEditSave = () => {
    if (editInput.trim().length === 0) {
      alert("type something...");
      return;
    }
    dispatch({ type: "EDIT_TODO", payload: { id: editId, title: editInput } });
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
              className="border-2 rounded w-full px-2 py-[0.5px]"
              ref={editInputRef}
              value={editInput}
              onChange={(e) => setEditInput(e.target.value)}
            />
          </div>
          <button className="btn mr-3" onClick={handleEditSave}>
            Save Edit
          </button>
          <button className="btn" onClick={() => setEditId(null)}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              className="size-4"
              checked={completed}
              onChange={handleToggle}
            />
            <p
              className={`${
                completed ? "line-through" : "decoration-solid"
              } text-lg w-full`}
            >
              {title}
            </p>
          </div>
          <button className="btn" onClick={handleDelete}>
            Delete
          </button>
          {completed ? null : (
            <button className="btn ml-3" onClick={handleEdit}>
              Edit
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default Todo;
