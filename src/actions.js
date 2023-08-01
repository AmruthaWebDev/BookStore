export const addBook = (book) => ({
  type: "ADD_BOOK",
  payload: book
});

export const updateBook = (id, updatedBook) => ({
  type: "UPDATE_BOOK",
  payload: { id, updatedBook }
});

export const deleteBook = (id) => ({
  type: "DELETE_BOOK",
  payload: id
});
