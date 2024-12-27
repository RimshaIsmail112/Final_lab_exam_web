import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddAttraction from '../components/AddAttraction';

const HomePage = () => {
  const [attractions, setAttractions] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  // Fetch all attractions from the API
  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/attractions');
        setAttractions(response.data);
      } catch (error) {
        console.error('Error fetching attractions:', error);
      }
    };

    fetchAttractions();
  }, []);

  // Toggle the add attraction form
  const handleAddAttraction = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <div>
      <h1>Welcome to the Tourism Management System</h1>
      <div>
        <button onClick={handleAddAttraction}>
          {showAddForm ? 'Cancel Add Attraction' : 'Add New Attraction'}
        </button>
      </div>

      {/* Show the form to add a new attraction if toggle is true */}
      {showAddForm && <AddAttraction />}

      <h2>Attractions List</h2>
      <ul>
        {attractions.map(attraction => (
          <li key={attraction._id}>
            <Link to={`/attraction/${attraction._id}`}>{attraction.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
