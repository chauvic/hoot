const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.resolve(__dirname, "/public");
const mongoose = require("mongoose");

// initialize express + configuration staging
const eventController = require(`./controllers/Event`);
const methodOverride = require("method-override");

mongoose.connect("mongodb://localhost/Event", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.use(express.static(publicPath));
app.use(
  "/bootstrap",
  express.static(__dirname + "/node_modules/boostrap/dist")
);

app.set("view engine", "hbs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride(`_method`));

// ------------------------ALL ROUTES------------------------
app.use("/", eventController);
// app.use(groupController);

// app.get("/Events", (req,res) => {
//   res.render("Event.hbs")
// })
// ----------------------------------------------------------

// listening on port
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
