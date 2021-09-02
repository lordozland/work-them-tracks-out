const mongoose = require("mongoose");

const WorkoutsSchema = new Schema({
    exercises: [
        {
            type: {
                type: String
            },
            name: {
                type: String
            },
        }
    ]
});

const Workouts = mongoose.model("Workouts", WorkoutsSchema);

module.exports = Workouts;