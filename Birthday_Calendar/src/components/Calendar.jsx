// src/components/Calendar.js
import React from 'react';

const Calendar = ({ onDayClick }) => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1); // Days from 1 to 31

  return (
    <div className="calendar">
      {days.map(day => (
        <div key={day} className="day" onClick={() => onDayClick(day)}>
          {day}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
