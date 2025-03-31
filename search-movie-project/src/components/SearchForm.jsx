import { Form } from "react-router-dom";
import styles from "./SearchForm.module.css";

function SearchForm({ searchTerm }) {
  return (
    <Form method="GET" className={styles.form_container}>
      <input
        type="text"
        name="search"
        id="search"
        className={styles.form_input}
        defaultValue={searchTerm}
        required
      />
      <button type="submit" className={styles.form_btn}>
        Search
      </button>
    </Form>
  );
}

export default SearchForm;
