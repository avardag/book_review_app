import React, { Component } from "react";

import { connect } from "react-redux";
import { authCheck } from "../actions";
// import component from "../components/component";

export default function(ComposedClass, authNeeded) {
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
      //check if isAuth and redirect to particular route
      if (!nextProps.user.userAuthData.isAuth) {//from Redux state passed to props
        if (authNeeded) {
          this.props.history.push("/login")
        }
      } else {
        if(authNeeded === false){
          this.props.history.push("/user")
        }
      }
    }

    //will render Route componnt w/ some props if authenticated
    render() {
      if (this.state.loading) {
        return <div className="loader">Loading ...</div>;
      }
      return (
        <ComposedClass {...this.props} />
      ); /* {...this.props} props from R-Router */
    }
  }

  const mapStateToProps = state => ({
    user: state.users
  });

  return connect(mapStateToProps)(AuthenticationCheck);
}
