import React from 'react';
import FlightList from './FlightList';

const GuestPage = () => (
  <div>
    <h1>Welcome, Guest!</h1>
    <p>You must log in to book tickets.</p>
    <FlightList />
  </div>
);

export default GuestPage;
