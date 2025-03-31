import { Link, Outlet, useNavigation } from "react-router-dom";
import Loader from "../components/UI/Loader";
import Container from "../components/UI/Container";
import styles from "./Root.module.css";

function Root() {
  const navigation = useNavigation();
  return (
    <>
      <Container>
        <nav className={styles.nav}>
          <Link to="/" className={styles.nav_title}>
            Movie Search
          </Link>
        </nav>
      </Container>
      {navigation.state === "loading" ? <Loader /> : <Outlet />}
    </>
  );
}

export default Root;
