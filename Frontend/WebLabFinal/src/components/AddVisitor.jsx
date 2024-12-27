import React, { useState } from 'react';
import axios from 'axios';

const AddVisitor = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/visitors', {
        name,
        email,
      });
      alert('Visitor added successfully!');
    } catch (error) {
      console.error('Error adding visitor:', error);
      alert('Failed to add visitor');
    }
  };

  return (
    <div>
      <h2>Add New Visitor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Visitor Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Visitor Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Add Visitor</button>
      </form>
    </div>
  );
};

export default AddVisitor;
