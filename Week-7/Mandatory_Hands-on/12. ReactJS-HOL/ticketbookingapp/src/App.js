import React, { useState } from 'react';
import Header from './components/Header';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} login={handleLogin} logout={handleLogout} />
      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
};

export default App;
