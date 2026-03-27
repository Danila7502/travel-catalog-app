import React from 'react';

function TravelCard({ travel }) {
  return (
    <div className="travel-card">
      <h3>{travel.title}</h3>
      <p><strong>Страна:</strong> {travel.country}</p>
      <p>{travel.description}</p>
    </div>
  );
}

export default TravelCard;