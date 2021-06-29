const express = require(`express`);
const router = express.Router();
const Event = require("../models/event-model");

// Show All Events "READ" Route
router.get("/Event", (req, res, next) => {
  Event.find({})
    .then((event) => res.render("showEvents", { event }))
    .catch(next);
});

// Show Events Index
router.get(`/Event/:index`, (req, res, next) => {
  const index = req.params.index;
  Event.find({}).then((event) => {
    res.render(`eventIndex`, event[index]);
  });
});

// ABOUT Route - information me
router.get("/about", (req, res) => {
  res.render("about");
});

// Add Events "CREATE" Route
router.get("/add", (req, res) => {
  res.render("new");
});

router.post("/add", (req, res, next) => {
  Event.create(req.body)
    .then((Events) => {
      res.redirect("/Event");
    })
    .catch(next);
});

// Edit Events "UPDATE" Route
router.get("/edit/:id", (req, res, next) => {
  const id = req.params.id;
  Event.findById(id)
    .then((event) => {
      res.render("edit", { event });
    })
    .catch(next);
});

// UPDATE Route
router.put("/edit/:id", (req, res) => {
  const id = req.params.id;
  Event.findByIdAndUpdate(
    { _id: id },
    {
      title: req.body.title,
      description: req.body.description,
      time: req.body.time,
      owner: req.body.owner,
    },
    { new: true }
  )
    .then((event) => {
      res.redirect("/Event");
    })
    .catch((err) => {
      console.log(err);
    });
});

// FINALLY, the "DELETE" Route
router.delete("/Event/:id", (req, res) => {
  const id = req.params.id;
  Event.findByIdAndDelete(id)
    .then((events) => {
      res.redirect("/Event");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;

// ---------OLD VERSION OMITTED------OLD VERSION OMITTED-------OLD VERSION OMITTED--------
// "HOME" route - Generic Home Route, nothing on it atm. Refers to home.hbs for HTML
// router.get("/", (req, res) => {
//   res.render("home.hbs");
// });

// // ADD a new "Event" Route
// router.get("/new", (req, res) => {
//   res.render("addEvent.hbs");
// });

// // POST and Render a new Event
// router.post("/new", async (req, res) => {
//   let newEvent = new Event({
//     title: req.body.title,
//     description: req.body.description,
//     time: req.body.time,
//     owner: req.body.owner,
//   });
//   try {
//     newEvent = await newEvent.save()
//     res.redirect(`/Event/`);
//   } catch (err) {
//     console.log(err);
//   }
// });

// // Changing an "Event" Route
// // router.

// // Add "Event" Route
// router.get("/Event", (req, res) => {
//   res.render("addEvent.hbs", { event: new Event() });
// });

// // router.post(`/addEvent`, (req, res) => {
//   //   console.log(`the CREATE route. Form Data: ${req.body}`);
//   //   console.log(req.body);
//   //   res.render("addEvent.hbs");
//   // });

//   // Edit "Event" Route
//   router.get("/Event/edit", (req, res) => {
//     res.render("changeEvent.hbs", { /*results*/ Event });
//   });

//   // Update: PUT data into the database when the edit form is submitted
//   router.put("/changeEvent/:id", (req, res) => {
//     const id = req.params.id;
//     Event.findOneAndUpdate(
//       { _id: id },
//       {
//         title: req.body.title,
//         complete: req.body.complete === "on",
//       },
//       { new: true }
//       )
//       .then((Event) => {
//         res.render("changeEvent.hbs", Event);
//       })
//       .catch(console.error);

//       // "CREATE" ROUTE -- needs to be router.POST not router.GET
//       // ------------------EVENT CREATE-------------------------
//       Event.create(req.body)
//       // do a ".then" after every query
//       .then((result) => {
//         res.redirect(`/addEvent`);
//       })
//       .catch((err) => {
//         console.log((err) => {
//           console.log(err);
//           res.send("no luck on create");
//         });
//       });
//     });

//     // Delete: DELETE the todo with a given id from the database
//     router.delete("/deleteEvent/:id/", (req, res) => {
//       const id = req.params.id;
//       Todo.findOneAndRemove({ _id: id })
//       .then(() => {
//         res.redirect("/deleteEvent");
//       })
//       .catch(console.error);
//     });
// ---------------------------------------------------------------------------ALL EVENTS ROUTES--------

// module.exports = router;
