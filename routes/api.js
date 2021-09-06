const router = require("express").Router();
const Workouts = require("../models/workouts.js")

router.post("/api/wokrouts", ({ body }, res) => {
    Workouts.insertMany(body)
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.get("/api/workouts", (req,res) => {
    Workouts.find({})
    .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
})

router.get("/api/workouts/range", (req,res) => {
  Workouts.find({})
  .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})

router.put("/api/workouts/:id", (req,res) => {
  Workouts.findByIdAndUpdate(
    { _id: req.patrams.id },
    { $push: { excercises: req.body } },
    {
      new: true,
      runValidators: true,
    })
  .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})


module.exports = router;