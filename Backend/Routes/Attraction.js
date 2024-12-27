const express = require("express");
const router = express.Router();
const Attraction = require("../Models/Attraction");

// Create Attraction
router.post("/", async (req, res) => {
  try {
    const { name, location, entryFee } = req.body;
    const attraction = new Attraction({ name, location, entryFee });
    await attraction.save();
    res.status(201).json(attraction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Attractions
router.get("/", async (req, res) => {
  try {
    const attractions = await Attraction.find();
    res.json(attractions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Top 5 Rated Attractions
router.get("/top-rated", async (req, res) => {
  try {
    const attractions = await Attraction.find().sort({ rating: -1 }).limit(5);
    res.json(attractions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
