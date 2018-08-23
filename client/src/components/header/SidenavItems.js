import React from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import { connect } from "react-redux";


const SidenavItems = ({user}) => { //destrng from redux store
  const items = [
    {
      type: "navItem",
      icon: "home",
      text: "Home",
      link: "/",
      restricted: false
    },
    {
      type: "navItem",
      icon: "user",
      text: "My Profile",
      link: "/user",
      restricted: true
    },
    {
      type: "navItem",
      icon: "user-plus",
      text: "Add Admins",
      link: "/user/register",
      restricted: true
    },
    {
      type: "navItem",
      icon: "sign-in",
      text: "Login",
      link: "/login",
      restricted: false,
      exclude: true
    },
    {
      type: "navItem",
      icon: "file-text-o",
      text: "My reviews",
      link: "/user/user-reviews",
      restricted: true
    },
    {
      type: "navItem",
      icon: "file-text-o",
      text: "Add reviews",
      link: "/user/add",
      restricted: true
    },
    {
      type: "navItem",
      icon: "sign-out",
      text: "Logout",
      link: "/user/logout",
      restricted: true
    }
  ];

  const element = (item, i) => {
    return (
      <div key={i} className={item.type}>
        <Link to={item.link}>
          <FontAwesome name={item.icon} />
          {item.text}
        </Link>
      </div>
    );
  };

  return (
    <div>
      {user.userAuthData?
        items.map((item, i) => {
          //if authenticated show all menu items
          if (user.userAuthData.isAuth) {
            //excluding Login (already logined? hide login)
            return !item.exclude?
              element(item, i)
            :null //return null during iteration on excluded route
          } else {
            //else if not authenticated show only notrestricted routes
            return !item.restricted ?
              element(item, i)
            :null //return null on restricted routes during iteration
          }
        })
      :null
    }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.users
  }
}

export default connect(mapStateToProps)(SidenavItems);
