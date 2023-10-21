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

  return (
    <div className="app">
      <BookList books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
