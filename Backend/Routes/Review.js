const express = require("express");
const router = express.Router();
const Review = require("../Models/Review");
const Attraction = require("../Models/Attraction");
const Visitor = require("../Models/Visitor");

// Post a Review
router.post("/", async (req, res) => {
  try {
    const { attractionId, visitorId, score, comment } = req.body;

    // Check if visitor has visited the attraction
    const visitor = await Visitor.findById(visitorId);
    if (!visitor.visitedAttractions.includes(attractionId)) {
      return res.status(400).json({ error: "Visitor has not visited this attraction." });
    }

    // Add review
    const review = new Review({ attraction: attractionId, visitor: visitorId, score, comment });
    await review.save();

    // Update Attraction Rating
    const reviews = await Review.find({ attraction: attractionId });
    const averageRating = reviews.reduce((acc, r) => acc + r.score, 0) / reviews.length;
    await Attraction.findByIdAndUpdate(attractionId, { rating: averageRating });

    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
