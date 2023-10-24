import { useState } from "react";

// custom hook
import useBooksContext from "../hooks/useBooksContext";

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);

  const { editBookById } = useBooksContext();

  // onChange input handler
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  // onSubmit form handler
  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit();
    editBookById(book.id, title);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        className="input"
        value={title}
        onChange={handleChange}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
