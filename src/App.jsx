import { useEffect } from "react";

// components
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

// custom hook
import useBooksContext from "./hooks/useBooksContext";

function App() {
  const { fetchBooks } = useBooksContext();

  // useEffect will get data from api server after the component is rendered the first time
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
