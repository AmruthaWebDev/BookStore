import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./styles.css";
import { updateBook } from "./actions";
import BookList from "./BookList";
import AddBookPopup from "./AddBookPopup";

const App = () => {
  const dispatch = useDispatch();
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleEditBook = (book) => {
    setSelectedBook(book);
    setShowEditPopup(true);
  };

  const handleUpdateBook = (updatedBook) => {
    dispatch(updateBook(selectedBook.id, updatedBook));
    setShowEditPopup(false);
  };

  const handleAddPopup = () => {
    setShowAddPopup(!showAddPopup);
  };

  const handleEditPopupClose = () => {
    setShowEditPopup(false);
  };

  return (
    <div>
      <h1 className="bookStore">Book Store</h1>
      <button onClick={handleAddPopup}>Add a Book</button>
      <BookList onEdit={handleEditBook} />
      {showAddPopup && <AddBookPopup onClose={handleAddPopup} />}
      {showEditPopup && (
        <AddBookPopup
          book={selectedBook}
          onUpdate={handleUpdateBook}
          onClose={handleEditPopupClose}
        />
      )}
    </div>
  );
};

export default App;
