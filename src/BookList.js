import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "./actions";

const BookList = ({ onEdit }) => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div style={{ display: "flex" }}>
      {books.map((book) => (
        <div id={book.sku} className="bookList">
          <div onClick={() => onEdit(book)}>
            <h3>Name: {book.name}</h3>
            <p>Price: {book.price}</p>
            <p>Category: {book.category}</p>
          </div>
          <button onClick={() => handleDelete(book.sku)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
