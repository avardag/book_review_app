import React, { Component } from "react";
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { addBook, clearNewBook } from "../../actions";

class AddBook extends Component {
  state = {
    formData: {
      name: "",
      author: "",
      review: "",
      pages: "",
      rating: "",
      price: ""
    }
  };

  handleInput = (e, name) => {
    const newFormData = { ...this.state.formData };

    newFormData[name] = e.target.value;
    this.setState({ formData: newFormData });
  };
  
  submitForm = e => {
    e.preventDefault();

    this.props.dispatch(addBook({
      ...this.state.formData,
      reviewerId: this.props.user.userAuthData.id
    }))

  };

  showNewBook = (book) =>{
    if (book.post === true) {
      return (
        <div className="conf_link">
        New book added! <Link to={`/books/${book.bookId}`} >Click to see new book</Link>
      </div>
      )
    }
  }

  
  componentWillUnmount() {
    this.props.dispatch(clearNewBook())
  }
  
  render() {
    return (
      <div className="rl_container">
        <form onSubmit={this.submitForm}>
          <h2>Add a Review</h2>
          <div className="form_element">
            <input
              type="text"
              placeholder="Enter a name"
              value={this.state.formData.name}
              onChange={e => this.handleInput(e, "name")}
            />
          </div>

          <div className="form_element">
            <input
              type="text"
              placeholder="Enter an author"
              value={this.state.formData.author}
              onChange={e => this.handleInput(e, "author")}
            />
          </div>

          <textarea
            className="article"
            name=""
            placeholder="Enter your review"
            value={this.state.formData.review}
            onChange={e => this.handleInput(e, "review")}
          />
          
          <div className="form_element">
            <input
              type="number"
              placeholder="Enter pages"
              value={this.state.formData.pages}
              onChange={e => this.handleInput(e, "pages")}
            />
          </div>

          <div className="form_element">
            <select
              value={this.state.formData.rating}
              onChange={e => this.handleInput(e, "rating")}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="form_element">
            <input
              type="number"
              placeholder="Enter price"
              value={this.state.formData.price}
              onChange={e => this.handleInput(e, "price")}
            />
          </div>

          <button type="submit">Add review</button>

          {
            this.props.books.newBook ?
            this.showNewBook(this.props.books.newBook)
            :null
          }
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {books: state.books}
}

export default connect(mapStateToProps)(AddBook);
