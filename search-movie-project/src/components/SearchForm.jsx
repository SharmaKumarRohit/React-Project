import { Form } from "react-router-dom";

function SearchForm({ searchTerm }) {
  return (
    <>
      <Form className="bg-white p-1 rounded-lg flex flex-col sm:flex-row sm:justify-between gap-2 shadow-md">
        <input
          type="text"
          name="search"
          id="search"
          className="outline-none py-3 px-2 w-full sm:w-10/12"
          defaultValue={searchTerm}
          required
        />
        <button
          type="submit"
          className="py-3 px-8 rounded-lg font-semibold bg-indigo-500 text-indigo-100 cursor-pointer hover:bg-indigo-600 transition-colors duration-300"
        >
          Search
        </button>
      </Form>
    </>
  );
}

export default SearchForm;
