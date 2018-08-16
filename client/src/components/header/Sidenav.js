import React from 'react'
import SimpleSidenav from "react-simple-sidenav";

function Sidenav(props) {
  return (
    <SimpleSidenav
      showNav = {props.showNav}
      onHideNav = {props.onHideNav}
      navStyle = {{background: "#242424", maxWidth: "220px"}}
    >
      Items
    </SimpleSidenav>
  )
}

export default Sidenav
