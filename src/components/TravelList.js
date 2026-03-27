import React from 'react';
import TravelCard from './TravelCard';

function TravelList({ travels, onLike }) {
  return (
    <div className="travel-list">
      {travels.map(travel => (
        <TravelCard 
          key={travel.id} 
          travel={travel} 
          onLike={onLike}
        />
      ))}
    </div>
  );
}

export default TravelList;