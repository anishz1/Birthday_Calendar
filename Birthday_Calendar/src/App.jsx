// src/App.js
import React, { useState } from 'react';
import Calendar from './components/Calendar';
import DayView from './components/DayView';
import FavoriteBirthdays from './components/FavoriteBirthdays';
import AddBirthdayForm from './components/AddBirthdayForm';
import './App.css';

function App() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [manualBirthdays, setManualBirthdays] = useState({});

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const handleAddToFavorites = (birthday) => {
    setFavorites([...favorites, birthday]);
  };

  const handleAddManualBirthday = (day, name) => {
    setManualBirthdays(prev => {
      const updated = { ...prev };
      if (!updated[day]) {
        updated[day] = [];
      }
      updated[day].push({ text: name });
      return updated;
    });
  };

  return (
    <div className="app">
      <h1>Birthdays Calendar</h1>
      <Calendar onDayClick={handleDayClick} />
      {selectedDay && (
        <>
          <DayView
            selectedDay={selectedDay}
            onAddToFavorites={handleAddToFavorites}
            manualBirthdays={manualBirthdays[selectedDay]}
          />
          <AddBirthdayForm selectedDay={selectedDay} onAddManualBirthday={handleAddManualBirthday} />
        </>
      )}
      <FavoriteBirthdays favorites={favorites} />
    </div>
  );
}

export default App;
