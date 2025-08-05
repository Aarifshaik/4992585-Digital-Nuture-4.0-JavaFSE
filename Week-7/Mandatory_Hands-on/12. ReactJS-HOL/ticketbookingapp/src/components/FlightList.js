import React from 'react';

const flights = [
  { from: 'Vijayawada', to: 'Eluru', price: 1234 },
  { from: 'Eluru', to: 'Vijayawada', price: 5678 },
  { from: 'Bangalore', to: 'Vijayawada', price: 9101 },
  { from: 'Vijayawada', to: 'Al-Harem', price: 1112 }
];
const FlightList = () => (
  <div>
    <h2>Available Flights</h2>
    <ul>
      {flights.map((flight) => (
        <li>
          {flight.from} → {flight.to} — ₹{flight.price}
        </li>
      ))}
    </ul>
  </div>
);
export default FlightList;
