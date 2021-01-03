const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: Data,
    exercies: []
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;