import { useTodos } from "./Context/TodosProvider";
import Todo from "./Todo";

function Todos() {
  const { todos } = useTodos();
  return (
    <div>
      {todos.length === 0 ? (
        <p className="text-center text-xl uppercase mt-3 font-medium text-zinc-700">
          Empty, Add more tasks
        </p>
      ) : (
        <>
          {todos.map((todo) => (
            <Todo {...todo} key={todo.id} />
          ))}
        </>
      )}
    </div>
  );
}

export default Todos;
