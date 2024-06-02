// src/components/FavoriteBirthdays.js
import React from 'react';

const FavoriteBirthdays = ({ favorites }) => {
  return (
    <div className="favorite-birthdays">
      <h2>Favorite Birthdays</h2>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>{favorite.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteBirthdays;
