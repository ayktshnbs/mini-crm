const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ["New", "Contacted", "Won", "Lost"],
      default: "New",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lead", LeadSchema);