const express = require("express");
const router = express.Router();
const Visitor = require("../Models/Visitor");

// Register Visitor
router.post("/", async (req, res) => {
  try {
    const { name, email } = req.body;
    const visitor = new Visitor({ name, email });
    await visitor.save();
    res.status(201).json(visitor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Visitor Activity
router.get("/activity", async (req, res) => {
  try {
    const visitors = await Visitor.find().populate("visitedAttractions");
    const activity = visitors.map(v => ({
      name: v.name,
      email: v.email,
      reviewedAttractions: v.visitedAttractions.length,
    }));
    res.json(activity);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
