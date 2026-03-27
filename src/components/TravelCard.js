import React from 'react';

function TravelCard({ travel, onLike }) {
  return (
    <div className="travel-card">
      <h3>{travel.title}</h3>
      <p><strong>Страна:</strong> {travel.country}</p>
      <p>{travel.description}</p>
      <button onClick={() => onLike(travel.id)}>
        Лайки: {travel.likes}
      </button>
    </div>
  );
}

export default TravelCard;