import React from 'react';

function Account(props) {
  return (
    <div>
      <h1>My Account</h1>
      <p>Welcome, {props.user}!</p>
      <button onClick={props.onLogout}>Logout</button>
    </div>
  );
}

export default Account;