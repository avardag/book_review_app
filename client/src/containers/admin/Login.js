import React, { Component } from "react";
import { connect } from "react-redux";

import { loginUser } from "../../actions";

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
    e.preventDeafult();
  };

  render() {
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
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Login);
