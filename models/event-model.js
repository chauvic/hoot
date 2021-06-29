const mongoose = require("../db/connection");

const eventSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    time: String,
    owner: String,
    },
  { timestamps: true }
);

// model name should start with capital letter, and singular
const Event = mongoose.model("Event", eventSchema); //songs in mongoDB

module.exports = Event;

