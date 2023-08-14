import React, { useContext } from "react"; // Import useContext from React
import BookShow from "../hooks/BookShow";
import useBooksContext from "../hooks/use-books-context"; // Assuming this is a custom hook you've defined

function BookList() {
  const { books } = useBooksContext(); // Use your custom hook here

  // Mapping the array of books to JSX elements
  const renderedBooks = books.map((book) => (
    <BookShow key={book.id} book={book} />
  ));

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
