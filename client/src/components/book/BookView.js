import React, { Component } from "react";
import { connect } from "react-redux";

import {getBookWithReviewer} from "../../actions"

class BookView extends Component {

  componentDidMount() {
    let bookId = this.props.match.params.id;
    this.props.dispatch(getBookWithReviewer(bookId))
  }
  

  render() {
    console.log(this.props.books)
    return <div>Ищщл Мшуц</div>;
  }
}

const mapStateToProps = state => ({
  books: state.books
});

export default connect(mapStateToProps)(BookView);
