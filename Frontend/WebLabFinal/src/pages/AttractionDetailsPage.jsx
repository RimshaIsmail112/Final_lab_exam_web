import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AttractionDetailsPage = () => {
  const { attractionId } = useParams();
  const [attraction, setAttraction] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchAttractionDetails = async () => {
      try {
        const attractionResponse = await axios.get(`http://localhost:5000/api/attractions/${attractionId}`);
        setAttraction(attractionResponse.data);

        const reviewsResponse = await axios.get(`http://localhost:5000/api/reviews/attraction/${attractionId}`);
        setReviews(reviewsResponse.data);
      } catch (error) {
        console.error('Error fetching attraction details:', error);
      }
    };

    fetchAttractionDetails();
  }, [attractionId]);

  if (!attraction) return <div>Loading...</div>;

  return (
    <div>
      <h2>{attraction.name}</h2>
      <p><strong>Location:</strong> {attraction.location}</p>
      <p><strong>Entry Fee:</strong> ${attraction.entryFee}</p>
      <p><strong>Rating:</strong> {attraction.rating}</p>

      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>
            <p><strong>Score:</strong> {review.score}</p>
            <p><strong>Comment:</strong> {review.comment || 'No comment provided'}</p>
          </li>
        ))}
      </ul>

      <div>
        <a href="/post-review">Post a Review</a>
      </div>
    </div>
  );
};

export default AttractionDetailsPage;
