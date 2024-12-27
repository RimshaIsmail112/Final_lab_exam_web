import React, { useState } from 'react';
import axios from 'axios';

const AddAttraction = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [entryFee, setEntryFee] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/attractions', {
        name,
        location,
        entryFee: parseFloat(entryFee),
      });
      alert('Attraction added successfully!');
    } catch (error) {
      console.error('Error adding attraction:', error);
      alert('Failed to add attraction');
    }
  };

  return (
    <div>
      <h2>Add New Attraction</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Attraction Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Entry Fee"
          value={entryFee}
          onChange={(e) => setEntryFee(e.target.value)}
          min="0"
          required
        />
        <button type="submit">Add Attraction</button>
      </form>
    </div>
  );
};

export default AddAttraction;
