import { useState, useRef, useEffect } from "react";

function Todo({
  id,
  title,
  completed,
  handleToggle,
  handleRemove,
  handleEdit,
}) {
  const [editId, setEditId] = useState(null);
  const [editInput, setEditInput] = useState("");
  const editRef = useRef();
  useEffect(() => {
    if (editId === id && editRef.current) editRef.current.focus();
  }, [editId, id]);
  const handleEditTodo = () => {
    setEditId(id);
    setEditInput(title);
  };
  const handleEditSaveTodo = () => {
    if (editInput.trim().length === 0) {
      alert("Please fill the input field");
      return;
    }
    handleEdit(editId, editInput);
    setEditId(null);
    setEditInput("");
  };
  return (
    <>
      <div
        style={{
          border: "2px solid #333",
          margin: "1rem 0",
          padding: "1rem",
          borderRadius: "5px",
        }}
      >
        {editId && editId === id ? (
          <>
            <div>
              <input
                type="text"
                className="todo__input"
                ref={editRef}
                value={editInput}
                onChange={(e) => setEditInput(e.target.value)}
              />
            </div>
            <button className="todo__btn" onClick={handleEditSaveTodo}>
              Save Edit
            </button>
            <button className="todo__btn" onClick={() => setEditId(null)}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <div className="todo__sec2">
              <input
                type="checkbox"
                checked={completed}
                onChange={() => handleToggle(id)}
              />
              <p className={completed ? "toggle" : null}>{title}</p>
            </div>
            <button className="todo__btn" onClick={() => handleRemove(id)}>
              Remove
            </button>
            {!completed ? (
              <button className="todo__btn" onClick={handleEditTodo}>
                Edit
              </button>
            ) : null}
          </>
        )}
      </div>
    </>
  );
}

export default Todo;
