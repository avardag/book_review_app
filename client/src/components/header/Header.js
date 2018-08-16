import React, { Component } from "react";
import FontAwesomeIcon from 'react-fontawesome'
import { Link } from "react-router-dom";


class Header extends Component {

  state = {
    showNav: false
  };

  render() {
    return (
      <header>
        <div className="open_nav">
         <FontAwesomeIcon name="bars"
            style={{color: "#fff", padding: "10px", cursor: "pointer"}}
          />
        </div>

          <Link to="/" className="logo">
            The Book Review 2.0
          </Link>
      </header>
    );
  }
}

export default Header;
