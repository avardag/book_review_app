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