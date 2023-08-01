import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBook, updateBook } from "./actions";

const AddBookPopup = ({ onClose, book }) => {
  const dispatch = useDispatch();
  const [currentBook, setCurrentBook] = useState({
    sku: "",
    name: "",
    price: "",
    category: "",
    description: ""
  });

  useEffect(() => {
    if (book) {
      setCurrentBook(book);
    }
  }, [book]);

  const handleSave = () => {
    if (book) {
      dispatch(updateBook(book.sku, currentBook));
    } else {
      dispatch(addBook(currentBook));
    }
    onClose();
  };

  return (
    <div>
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={onClose}>
            x
          </span>
          <h3>{book ? "Edit Book" : "Add Book"}</h3>
          <input
            type="number"
            placeholder="Id"
            value={currentBook.sku}
            onChange={(e) =>
              setCurrentBook({ ...currentBook, sku: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Name"
            value={currentBook.name}
            onChange={(e) =>
              setCurrentBook({ ...currentBook, name: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Price"
            value={currentBook.price}
            onChange={(e) =>
              setCurrentBook({ ...currentBook, price: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Category"
            value={currentBook.category}
            onChange={(e) =>
              setCurrentBook({ ...currentBook, category: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Description"
            value={currentBook.description}
            onChange={(e) =>
              setCurrentBook({ ...currentBook, description: e.target.value })
            }
          />
          <button onClick={handleSave}>{book ? "Save" : "Add"} Book</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddBookPopup;
