import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

import BooksContext from "./context/books";

function App() {
  const { fetchBooks } = useContext(BooksContext);
  useEffect(() => {
    fetchBooks();
  }, []);

  /*
  // dont do this:
  fetchBooks();
  */
  //  use use Effect instead

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
