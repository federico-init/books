import { useState } from "react";

// components
import BookEdit from "./BookEdit";

// custom hook
import useBooksContext from "../hooks/useBooksContext";

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);

  const { deleteBookById } = useBooksContext();

  // event handler for click on delete button
  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  // event handler for click on edit button
  const handleEditClick = () => {
    setShowEdit((prev) => !prev);
  };

  // function that will close edit form upon user submission
  const handleSubmit = () => {
    setShowEdit(false);
  };

  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        alt={book.title}
      />
      {showEdit ? (
        <BookEdit book={book} onSubmit={handleSubmit} />
      ) : (
        <h3>{book.title}</h3>
      )}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}></button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
