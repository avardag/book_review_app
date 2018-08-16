import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getBooks } from '../actions/index';

import BookItem from '../widgetsUI/BookItem';

class HomeContainer extends Component {
  
  componentDidMount() {
    this.props.dispatch(getBooks(4, 0, "desc"))
  }
  
  renderItems = (books) =>(
    books.list ?
      books.list.map((item)=>(
        <BookItem {...item} key={item._id}/>
      ))
    : null
  )

  render() {
    
    return (
      <div>
        {this.renderItems(this.props.books)}
      </div>
    )
  }
}



const mapStateToProps = (state) => ({
  books: state.books
})

export default connect(mapStateToProps)(HomeContainer)
