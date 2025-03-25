import React from "react";
import Todo from "./Todo";

function Todos({ todos, dispatch }) {
  return (
    <div>
      {todos.length === 0 ? (
        <p className="text-center text-xl uppercase mt-3 font-medium text-zinc-700">
          Empty, Add more tasks
        </p>
      ) : (
        <>
          {todos.map((todo) => (
            <Todo {...todo} dispatch={dispatch} key={todo.id} />
          ))}
        </>
      )}
    </div>
  );
}

export default Todos;
