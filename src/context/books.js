import { createContext, useCallback, useState } from "react";

import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  // this state contains all books added by user, each book is an object (id, title)
  const [books, setBooks] = useState([]);

  // function that retrieves books data from the api server
  const fetchBooks = useCallback(async () => {
    const res = await axios.get("http://localhost:3001/books");

    setBooks(res.data);
  }, []);

  // function that will create and add the new book to our state
  const createBook = async (title) => {
    const res = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [...books, res.data];

    setBooks(updatedBooks);
  };

  // function that will delete the selected book
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  // function that will edit a book title
  const editBookById = async (id, newTitle) => {
    const res = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...res.data };
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  return (
    <BooksContext.Provider
      value={{ books, deleteBookById, editBookById, createBook, fetchBooks }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
