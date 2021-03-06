export default function(state = {}, action) {
  switch (action.type) {
    case "GET_BOOKS":
      return {...state, list: action.payload};
    case "GET_BOOK":
      return {...state, foundBook: action.payload};
    case "UPDATE_BOOK":
      return {...state, 
                  bookUpdate: action.payload.success,
                  foundBook: action.payload.doc
                };
    case "DELETE_BOOK":
      return {...state, bookDeleted: action.payload};
    case "CLEAR_BOOK":
      return {
        ...state, 
        foundBook: action.payload.foundBook,
        bookDeleted: action.payload.bookDeleted,
        bookUpdate: action.payload.bookUpdate
      }
    case "GET_BOOK_W_REVIEWER":
      return {
        ...state,
        book:action.payload.book,
        reviewer:action.payload.reviewer
      };
    case "CLEAR_BOOK_W_REVIEWER":
      return {
        ...state,
        book:action.payload.book,
        reviewer:action.payload.reviewer
      };
    case "ADD_BOOK":
      return {
        ...state,
        newBook:action.payload
      };
    case "CLEAR_NEW_BOOK":
      return {
        ...state,
        newBook:action.payload
      };
    
    default:
      return state;
  }
}
