import React from 'react';

const Header = ({ isLoggedIn, login, logout }) => {
  return (
    <header>
      <h1>Ticket Booking App</h1>
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </header>
  );
};

export default Header;
