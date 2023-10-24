import { useContext, useState } from "react";

// context
import BooksContext from "../context/books";

const BookCreate = () => {
  // this state stores the title of the new book to add
  const [title, setTitle] = useState("");

  const { createBook } = useContext(BooksContext);

  // event handler for input text
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  // submit form handler
  const handleSubmit = (event) => {
    event.preventDefault();

    if (title !== "") createBook(title);

    // text input cleaning
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          type="text"
          value={title}
          placeholder="Add a new book..."
          onChange={handleChange}
        />
        <button className="button">Add Book</button>
      </form>
    </div>
  );
};

export default BookCreate;
