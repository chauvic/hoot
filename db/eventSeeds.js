const User = require("../models/user-model");
const Event = require("../models/event-model");
const userData = require("./userSeeds.json");
const seedData = require("./eventSeeds.json");

Event.deleteMany({})
  .then(() => {
    return Event.insertMany(seedData);
  })
  .then(console.log)
  .catch(console.error);

User.deleteMany({})
  .then(() => {
    return User.insertMany(userData);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });
