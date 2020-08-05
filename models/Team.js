const mongoose = require("mongoose");

const TeamSchema = mongoose.Schema({
  team: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  pos: {
    type: Number,
    required: true,
  },
  played: {
    type: Number,
    required: true,
  },
  won: {
    type: Number,
    required: true,
  },
  drawn: {
    type: Number,
    required: true,
  },
  lost: {
    type: Number,
    required: true,
  },
  goals_for: {
    type: Number,
    required: true,
  },
  goals_against: {
    type: Number,
    required: true,
  },
  pts: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model("Teams", TeamSchema);