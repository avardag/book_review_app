import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getBooks } from '../actions/index';

import BookItem from '../widgetsUI/BookItem';

class HomeContainer extends Component {
  
  componentDidMount() {
    this.props.dispatch(getBooks(2, 0, "desc"))
  }
  
  renderItems = (books) =>(
    books.list ?
      books.list.map((item)=>(
        <BookItem {...item} key={item._id}/>
      ))
    : null
  )

  loadMore = ()=>{
    // number of books in a list.
    // to be passed into getBooks() 'start'/'skip' argument
    let count = this.props.books.list.length;
    //need the 4th arg of existing list of books, to get appended after triggering loadMore()
    let existingList = this.props.books.list;
    this.props.dispatch(getBooks(2, count, 'desc', existingList))
  }
  render() {
    
    return (
      <div>
        {this.renderItems(this.props.books)}
        <div className="loadmore" onClick={this.loadMore}>
          Load More
        </div>
      </div>
    )
  }
}



const mapStateToProps = (state) => ({
  books: state.books
})

export default connect(mapStateToProps)(HomeContainer)
