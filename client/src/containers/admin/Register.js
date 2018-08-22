import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers, userRegister } from '../../actions';

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
    
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    this.setState({error: ''}) //clear left out error from state before submit
    let newUserData = {
      name: this.state.name,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
    }
    this.props.dispatch(userRegister(newUserData, this.props.user.foundUsers))
  };

  render() {
    console.log(this.props)
    let user = this.props.user; //user obj from redux state
    return (
      <div className="rl_container">
        <form onSubmit={this.submitForm}>
          <h2>Add user:</h2>
          <div className="form_element">
            <input 
                type="text"
                placeholder="Enter name"
                name="name"
                value={this.state.name}
                onChange={this.handleInput}
                />
          </div>
          
          <div className="form_element">
            <input 
                type="text"
                placeholder="Enter Lastname"
                name="lastname"
                value={this.state.lastname}
                onChange={this.handleInput}
                /> 
          </div>
          <div className="form_element">
            <input 
                type="email"
                placeholder="Enter Email"
                name="email"
                value={this.state.email}
                onChange={this.handleInput}
                />
          </div>
          <div className="form_element">
            <input 
                type="password"
                placeholder="Enter Email"
                name="password"
                value={this.state.password}
                onChange={this.handleInput}
                />
          </div>

          <button type="submit">Add User</button>
          <div className="error">{this.state.error}</div>
        </form>

        <div className="current_users">
          <h4>Current Users:</h4>
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users
});

export default connect(mapStateToProps)(Register);
