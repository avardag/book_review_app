import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from '../../actions';

class Register extends Component {
  state = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    error: ""
  };

  componentWillMount() {
    this.props.dispatch(getUsers())
  }

  showUsers = (user) =>(
    user.foundUsers?
      user.foundUsers.map(u =>(
        <tr key={u._id}>
          <td>{u.name}</td>
          <td>{u.lastname}</td>
          <td>{u.email}</td>
        </tr>
      ))
    :null
    )

  handleInput = e => {
    // const newFormData = { ...this.state.formData };
    // newFormData[name] = e.target.value;
    // this.setState({ [name]: e.target.name });
  };

  submitForm = e => {
    e.preventDefault();
  };

  render() {
    console.log(this.props)
    let user = this.props.user; //user obj from redux state
    return (
      <div className="rl_container">
        <form onSubmit={this.submitForm}>
          <h2>Add user:</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Lastname</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {this.showUsers(user)}
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users
});

export default connect(mapStateToProps)(Register);
