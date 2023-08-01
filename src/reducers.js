const initialState = {
  books: []
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        books: [...state.books, action.payload]
      };
    case "UPDATE_BOOK":
      return {
        ...state,
        books: state.books.map((book) =>
          book.sku === action.payload.id ? action.payload.updatedBook : book
        )
      };
    case "DELETE_BOOK":
      return {
        ...state,
        books: state.books.filter((book) => book.sku !== action.payload)
      };
    default:
      return state;
  }
};
export default bookReducer;
