// src/components/AddBirthdayForm.js
import React, { useState } from 'react';

const AddBirthdayForm = ({ selectedDay, onAddManualBirthday }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddManualBirthday(selectedDay, name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-birthday-form">
      <h3>Add Birthday on Day {selectedDay}</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        required
      />
      <button type="submit">Add Birthday</button>
    </form>
  );
};

export default AddBirthdayForm;
