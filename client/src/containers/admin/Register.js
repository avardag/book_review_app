import React, { Component } from "react";
import { connect } from "react-redux";
// import { getUserReviews, registerUser } from '../../actions';

class Register extends Component {
  state = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    error: ""
  };

  handleInput = e => {
    // const newFormData = { ...this.state.formData };
    // newFormData[name] = e.target.value;
    // this.setState({ [name]: e.target.name });
  };

  submitForm = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="rl_container">
        <form onSubmit={this.submitForm}>
          <h2>Add user:</h2>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Register);
