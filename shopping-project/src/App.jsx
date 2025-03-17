import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Create from "./pages/Create";
import Edit from "./pages/Edit";

function App() {
  const { search, pathname } = useLocation();
  return (
    <div className="w-full h-screen flex">
      {(pathname !== "/" || search.length > 0) && (
        <Link to="/" className="text-red-300 absolute top-[4%] left-[16.5%]">
          Home
        </Link>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
