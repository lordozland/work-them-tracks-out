const router = require("express").Router();
const Workouts = require("../models/workouts.js")

router.get("/api/workouts", (req,res) => {
    Workouts.find()
    .then()
})

Transaction.find({})
.sort({ date: -1 })
.then(dbTransaction => {
  res.json(dbTransaction);
})
.catch(err => {
  res.status(400).json(err);
});

module.exports = router;