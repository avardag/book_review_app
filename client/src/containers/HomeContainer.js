import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getBooks } from '../actions/index';

class HomeContainer extends Component {
  
  componentDidMount() {
    this.props.dispatch(getBooks(4, 0, "desc"))
  }
  
  renderItems = (books) =>(
    books.list ?
      books.list.map((item)=>(
        'item'
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
