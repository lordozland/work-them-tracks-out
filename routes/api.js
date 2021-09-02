const router = require("express").Router();
const Workouts = require("../models/workouts.js")

router.get("/api/workouts", (req,res) => {
    Workouts.find()
})

module.exports = router;