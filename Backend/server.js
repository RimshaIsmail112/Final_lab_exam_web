const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Middlewares
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Import routes
const attractionRoutes = require("./Routes/attractions");
const visitorRoutes = require("./Routes/visitors");
const reviewRoutes = require("./Routes/reviews");

// Use routes
app.use("/api/attractions", attractionRoutes);
app.use("/api/visitors", visitorRoutes);
app.use("/api/reviews", reviewRoutes);

// MongoDB and Server setup
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
