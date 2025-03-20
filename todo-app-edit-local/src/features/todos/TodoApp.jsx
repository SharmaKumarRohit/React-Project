import AddFormTodo from "./AddFormTodo";
import TodoList from "./TodoList";

function TodoApp() {
  return (
    <div className="max-w-[1280px] w-[90%] mx-auto h-full py-5">
      <h2 className="text-3xl font-medium uppercase text-center mb-5">
        Todo App
      </h2>
      <AddFormTodo />
      <TodoList />
    </div>
  );
}

export default TodoApp;
