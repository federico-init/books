import { useState } from "react";

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);

  // onChange input handler
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  // onSubmit form handler
  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(book.id, title);
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
