import { Link, Outlet, useNavigation } from "react-router-dom";
import Container from "../components/UI/Container";
import LoadingSpinner from "../components/UI/LoadingSpinner";

function Root() {
  const navigation = useNavigation();
  return (
    <>
      <header className="bg-indigo-100 py-4 h-16">
        <Container>
          <nav>
            <Link to="/" className="w-fit block">
              <h1 className="text-2xl font-bold text-indigo-500 font-inter">
                Search Movie
              </h1>
            </Link>
          </nav>
        </Container>
      </header>
      <main className="bg-indigo-100 min-h-[calc(100dvh-64px)] font-inter">
        <Container>
          {navigation.state === "loading" ? <LoadingSpinner /> : <Outlet />}
        </Container>
      </main>
    </>
  );
}

export default Root;
