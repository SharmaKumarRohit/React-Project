import Todo from "./Todo";

function Todos({ todos, handleToggle, handleRemove, handleEdit }) {
  return (
    <div>
      {todos.length === 0 ? (
        <h2>Empty, Add more task</h2>
      ) : (
        <>
          {todos.map((todo) => (
            <Todo
              {...todo}
              key={todo.id}
              handleToggle={handleToggle}
              handleRemove={handleRemove}
              handleEdit={handleEdit}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default Todos;
