import { useContext } from "react";

// context
import BooksContext from "../context/books";

// components
import BookShow from "./BookShow";

const BookList = () => {
  const { books } = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
