import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import moment from "moment"
import { getUserReviews } from '../../actions';

class UserReviews extends Component {
  
  componentDidMount() {
    this.props.dispatch(getUserReviews(this.props.user.userAuthData.id))
  }
  
  
  componentWillReceiveProps(nextProps) {
    // this.props.user.userReviews
    
  }
  
  showUserReviews = (user)=>(
    user.userReviews ?
      user.userReviews.map(item=>(
        <tr key={item._id}>
          <td><Link to={`user/edit-post/${item._id}`}>
                {item.name}
              </Link>
          </td>
          <td>{item.author}</td>
          <td>
            {moment(item.createdAt).format("DD/MM/YY")}
          </td>
        </tr>
      ))
    :null
  )

  render() {
    console.log(this.props)
    return (
      <div className="user_posts">
        <h4>Your Reviews:</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Author</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.showUserReviews(this.props.user)}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.users
})

export default connect(mapStateToProps)(UserReviews)
