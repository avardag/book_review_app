import React, { Component } from "react";
import FontAwesomeIcon from 'react-fontawesome'
import { Link } from "react-router-dom";

import Sidenav from './Sidenav';


class Header extends Component {

  state = {
    showNav: false
  };

  onHideNav = () =>{
    this.setState({showNav: false})
  }

  render() {
    return (
      <header>
        <div className="open_nav">
         <FontAwesomeIcon 
            name="bars"
            onClick={()=> this.setState({showNav: true}) }
            style={{color: "#fff", padding: "10px", cursor: "pointer"}}
          />
        </div>
        <Sidenav 
            showNav={this.state.showNav}
            onHideNav = {()=>this.onHideNav()}
        />
          <Link to="/" className="logo">
            The Book Review 2.0
          </Link>
      </header>
    );
  }
}

export default Header;
