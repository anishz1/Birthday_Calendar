// src/components/BirthdayItem.js
import React from 'react';

const BirthdayItem = ({ birthday, onAddToFavorites }) => {
  return (
    <li className="birthday-item">
      <span>{birthday.text}</span>
      <button onClick={() => onAddToFavorites(birthday)}>Add to Favorites</button>
    </li>
  );
};

export default BirthdayItem;
