import React from 'react';
import FlightList from './FlightList';

const UserPage = () => (
  <div>
    <h1>Welcome, User!</h1>
    <p>You can now book your flight tickets.</p>
    <FlightList />
    <button onClick={() => alert('Ticket booked!')}>Book Ticket</button>
  </div>
);

export default UserPage;
