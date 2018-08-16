import React from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";

const SidenavItems = () => {
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
      {items.map((item, i) => {
        return element(item, i);
      })}
    </div>
  );
};

export default SidenavItems;
