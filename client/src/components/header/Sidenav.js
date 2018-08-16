import React from 'react'
import SimpleSidenav from "react-simple-sidenav";

import SidenavItems from "./SidenavItems"
function Sidenav(props) {
  return (
    <SimpleSidenav
      showNav = {props.showNav}
      onHideNav = {props.onHideNav}
      navStyle = {{background: "#242424", maxWidth: "220px"}}
    >
      <SidenavItems/>
    </SimpleSidenav>
  )
}

export default Sidenav

// import React from 'react'
// import SimpleSidenav from "react-simple-sidenav";

// import SidenavItems from "./SidenavItems"
// function Sidenav(props) {
//   return (
//     <SimpleSidenav
//       showNav = {props.showNav}
//       onHideNav = {props.onHideNav}
//       navStyle = {{background: "#242424", maxWidth: "220px"}}
//     >
//       k
//     </SimpleSidenav>
//   )
// }

// export default Sidenav
