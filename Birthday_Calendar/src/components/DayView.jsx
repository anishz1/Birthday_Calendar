// src/components/DayView.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BirthdayItem from './BirthdayItem';

const DayView = ({ selectedDay, onAddToFavorites, manualBirthdays = [] }) => {
  const [birthdays, setBirthdays] = useState([]);

  useEffect(() => {
    if (selectedDay) {
      axios.get(`https://feed/v1/wikipedia/{language}/onthisday/{type}/{MM}/{DD}/${selectedDay}`)
        .then(response => {
          setBirthdays(response.data.births);
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [selectedDay]);

  return (
    <div className="day-view">
      <h2>Birthdays on Day {selectedDay}</h2>
      <ul>
        {manualBirthdays.map((birthday, index) => (
          <BirthdayItem
            key={`manual-${index}`}
            birthday={birthday}
            onAddToFavorites={onAddToFavorites}
          />
        ))}
        {birthdays.map(birthday => (
          <BirthdayItem
            key={birthday.pages[0].id}
            birthday={birthday}
            onAddToFavorites={onAddToFavorites}
          />
        ))}
      </ul>
    </div>
  );
};

export default DayView;
