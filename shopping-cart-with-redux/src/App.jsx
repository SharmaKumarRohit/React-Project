import Header from "./components/Header";
import Products from "./components/Products";
import { ToastContainer } from "react-toastify";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="font-Inter">
        <ToastContainer
          position="bottom-right"
          newestOnTop={true}
          hideProgressBar={true}
          autoClose={600}
        />
        <Header />
        <Products />
      </div>
    </Provider>
  );
}

export default App;
