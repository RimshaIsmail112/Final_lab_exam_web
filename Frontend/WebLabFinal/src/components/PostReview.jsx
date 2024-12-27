import React, { useState } from 'react';
import axios from 'axios';

const PostReview = () => {
  const [attractionId, setAttractionId] = useState('');
  const [visitorId, setVisitorId] = useState('');
  const [score, setScore] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/reviews', {
        attractionId,
        visitorId,
        score: parseInt(score),
        comment,
      });
      alert('Review posted successfully!');
    } catch (error) {
      console.error('Error posting review:', error);
      alert('Failed to post review');
    }
  };

  return (
    <div>
      <h2>Post a Review</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Attraction ID"
          value={attractionId}
          onChange={(e) => setAttractionId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Visitor ID"
          value={visitorId}
          onChange={(e) => setVisitorId(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Score (1-5)"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          min="1"
          max="5"
          required
        />
        <textarea
          placeholder="Comment (optional)"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default PostReview;
