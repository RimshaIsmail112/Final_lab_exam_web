import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListAttractions = () => {
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/attractions');
        setAttractions(response.data);
      } catch (error) {
        console.error('Error fetching attractions:', error);
        alert('Failed to fetch attractions');
      }
    };

    fetchAttractions();
  }, []);

  return (
    <div>
      <h2>List of Attractions</h2>
      <ul>
        {attractions.map((attraction) => (
          <li key={attraction._id}>
            {attraction.name} - {attraction.location} (Entry Fee: ${attraction.entryFee})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListAttractions;
