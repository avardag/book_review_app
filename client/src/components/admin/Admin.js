import React from 'react'

function User(props) {
  const user = props.user.userAuthData;
  
  return (
    <div className="user_container">
      <div className="avatar">
        <img src="/images/avatar.png" alt="avatar"/>
      </div>
      <div className="nfo">
        <div><span>Name:</span> {user.name}</div>
        <div><span>Lastame:</span> {user.lastname}</div>
        <div><span>Email:</span> {user.email}</div>
      </div>
    </div>
  )
}

export default User
