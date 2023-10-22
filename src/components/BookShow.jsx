import { useState } from "react";

// components
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  // event handler for click on delete button
  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  // event handler for click on edit button
  const handleEditClick = () => {
    setShowEdit((prev) => !prev);
  };

  // function that will update book title && close edit form
  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);

    onEdit(id, newTitle);
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
