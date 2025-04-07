import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "./todosSlice";

function SingleTodo({ todo }) {
  const [editId, setEditId] = useState(null);
  const [editInput, setEditInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(deleteTodo(todo.id));
  }
  function handleToggle() {
    dispatch(toggleTodo({ id: todo.id, completed: todo.completed }));
  }
  function handleEdit(id, title) {
    setEditId(id);
    setEditInput(title);
  }
  function handleEditTodo() {
    setIsLoading(true);
    dispatch(editTodo({ id: editId, title: editInput }))
      .unwrap()
      .then(() => {
        setEditId(null);
        setEditInput("");
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <div
      style={{
        border: "2px solid #fff",
        margin: "1rem",
        padding: "1rem",
        borderRadius: "5px",
      }}
    >
      {editId && editId === todo.id ? (
        <>
          <div>
            <input
              type="text"
              name="edit"
              id="edit"
              value={editInput}
              onChange={(e) => setEditInput(e.target.value)}
            />
          </div>
          <button onClick={handleEditTodo} className="mt" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Edit"}
          </button>
          <button onClick={() => setEditId(null)} className="mt ml">
            Cancel
          </button>
        </>
      ) : (
        <>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              checked={todo.completed}
              onChange={handleToggle}
            />
            <p
              style={{
                textDecoration: `${todo.completed ? "line-through" : "none"}`,
              }}
            >
              {todo.title}
            </p>
          </div>
          <button onClick={handleDelete}>Delete</button>
          <button
            onClick={() => handleEdit(todo.id, todo.title)}
            className="ml"
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default SingleTodo;
