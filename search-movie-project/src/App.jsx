import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import SingalMovieDetail from "./pages/SingalMovieDetail";
import Root from "./pages/Root";
import Error from "./pages/Error";
import { loader as MovieLoader } from "./pages/Home";
import { loader as SingalMovieLoader } from "./pages/SingalMovieDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route index loader={MovieLoader} element={<Home />} />
      <Route
        path="detail/:imdbId"
        loader={SingalMovieLoader}
        element={<SingalMovieDetail />}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
