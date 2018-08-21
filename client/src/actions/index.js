import axios from 'axios';

export function getBooks(limit=10, start=0, order="asc", existingList='') {
  //localhost:3001/api/books?skip=3&limit=2&order=asc
  const request = axios.get(`api/books?limit=${limit}&skip=${start}&order=${order}`)
                  .then(res => {
                    if (existingList) {
                      return [...existingList, ...res.data]
                    } else {
                      return res.data
                    }
                  })
  
  return{
    type: "GET_BOOKS",
    payload: request
  }
}
//Chainig two action creators and uing redux-thunk
export function getBookWithReviewer(id){
  
  const request = axios.get(`http://localhost:3001/api/book?id=${id}`)

  return (dispatch)=>{
    request.then((response)=>{
      let book = response.data
      dispatch(getAuthor(book)) //dispatching another action to get user ID
    })
  }
}
function getAuthor(book){
  
  const request = axios.get(`/api/user?id=${book.reviewerId}`)
  return (dispatch) =>{
    request.then((res)=>{
      let reviewer = res.data;
      let bookWithReviewer = {
        book,
        reviewer
      }
      dispatch({
          type:'GET_BOOK_W_REVIEWER',
          payload: bookWithReviewer
      })
  })
  }
}

export function clearBookWithReviewer() {
  return {
    type: "CLEAR_BOOK_W_REVIEWER",
    payload: {
      book: {},
      reviewer: {}
    }
  }
}

// export function addBook(book){
//   console.log("book obj fr action bf post", book)
//   const request = axios.post('/api/book',book)
//       .then(response => {
//         console.log("response. fr axios", response)
//         return response.data
//       });

//   return {
//       type:'ADD_BOOK',
//       payload:request
//   }
// }

//full of errors CHECK LATER
export function addBook(book) {
  return function(dispatch) {
    axios.post('/api/book', book)
      .then((response) => { //doesnt get to here. 
        return dispatch({
          type:'ADD_BOOK',
          payload:response.data
      });
      })
      .catch((error) => {
        if(error.response.data) { // CRAZY & STUPID FIX !!!
          return dispatch({ 
            type:'ADD_BOOK',
            payload:error.response.data
        });
        }
      });
  }
}

export function clearNewBook() {
  return {
    type: "CLEAR_NEW_BOOK",
    payload: {}
  }
}
//edit actions
export function getBook(id){
  // localhost:3001/api/book?id=5b720f575056d522f20fbe2a
  const request = axios.get(`/api/book?id=${id}`)
                  .then(res => res.data)
  return {
    type: "GET_BOOK",
    payload: request
  }
}
export function updateBook(data){
  const request = axios.put(`/api/book`, data)
                  .then(res => res.data)
  return {
    type: "UPDATE_BOOK",
    payload: request
  }
}
export function deleteBook(id){
  // delete method on  /api/book?id=948590860938-378
  const request = axios.delete(`/api/book?id=${id}`)
                  .then(res => res.data)
  return {
    type: "DELETE_BOOK",
    payload: request
  }
}
export function clearBookStateAfterDelete() {
  return {
    type: "CLEAR_BOOK",
    payload: {
      bookDeleted: false,
      bookUpdate: false,
      foundBook: null
    }
  }
}


/* USER */

export function userLogin({email, password}) { //destrrng the args(state obj)
  
  const request = axios.post("/api/login", {email, password})
                    .then(res => res.data)
  
  return{
    type: "USER_LOGIN",
    payload: request
  }
}
export function authCheck() { //destrrng the args(state obj)
  
  const request = axios.get("/api/auth")
                    .then(res => res.data)
  
  return{
    type: "USER_AUTH_CHECK",
    payload: request
  }
}
export function getUserReviews(userId) {
  
  const request = axios.get(`/api/user_reviews?user=${userId}`)
                    .then(res => res.data)
  
  return{
    type: "GET_USER_REVIEWS",
    payload: request
  }
}


