import AddTodoForm from "./AddTodoForm";
import Todos from "./Todos";

function App() {
  return (
    <>
      <div className="main-container">
        <h2 className="text-3xl uppercase text-center font-medium mb-4">
          Todo App
        </h2>
        <AddTodoForm />
        <Todos />
      </div>
    </>
  );
}

export default App;
