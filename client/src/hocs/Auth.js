import React, { Component } from "react";

import { connect } from "react-redux";
import { authCheck } from "../actions";
// import component from "../components/component";

export default function(ComposedClass) {
  class AuthenticationCheck extends Component {
    state = {
      loading: true
    };
    // check authentication of user
    //will send post request to /api/auth to check for authentication
    // & response will be passed to ComposedClass as props
    componentDidMount() {
      this.props.dispatch(authCheck());
    }

    componentWillReceiveProps(nextProps) {
      this.setState({ loading: false });
    }

    //will render Route componnt w/ some props if authenticated
    render() {
      if (this.state.loading) {
        return <div className="loader">Loading ...</div>;
      }
      return (
        <ComposedClass {...this.props} user="" />
      ); /* {...this.props} props from R-Router */
    }
  }

  const mapStateToProps = state => ({
    user: state.users
  });

  return connect(mapStateToProps)(AuthenticationCheck);
}