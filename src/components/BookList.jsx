// components
import BookShow from "./BookShow";

// custom hook
import useBooksContext from "../hooks/useBooksContext";

const BookList = () => {
  const { books } = useBooksContext();

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
