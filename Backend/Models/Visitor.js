const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    match: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ 
  },
  visitedAttractions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Attraction" }],
});

module.exports = mongoose.model("Visitor", visitorSchema);
