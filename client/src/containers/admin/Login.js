import React, { Component } from "react";
import { connect } from "react-redux";

import { userLogin } from "../../actions";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    success: false
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitForm = e => {
    e.preventDefault();

    this.props.dispatch(userLogin(this.state));
  };
  //redirect user after successful login & recieving loginInfo thru dispatch
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.loginData.isAuth) {
      this.props.history.push("/user");
    }
  }

  render() {
    let user = this.props.user;

    return (
      <div className="rl_container">
        <form onSubmit={this.submitForm}>
          <h2>Login here</h2>

          <div className="form_element">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={this.state.email}
              onChange={this.handleInput}
            />
          </div>

          <div className="form_element">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.handleInput}
            />
          </div>

          <button type="submit">Log in</button>
          <div className="error">
            {user.loginInfo ? <div>{user.loginInfo.message}</div> : null}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users
  };
};

export default connect(mapStateToProps)(Login);
