import { useState } from "react";

// components
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  // this state contains all books added by user, each book is an object (id, title)
  const [books, setBooks] = useState([]);

  // function that will create and add the new book to our state
  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];

    setBooks(updatedBooks);
  };

  // function that will delete the selected book
  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  // function that will edit a book title
  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
