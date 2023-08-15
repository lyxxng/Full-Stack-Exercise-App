import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

// Connect to the database
const db = mongoose.connection;
// The open event is called when the database connects successfully
db.once('open', () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

// Exercise schema definition
const exerciseSchema = mongoose.Schema({
    name: {type: String, required: true},
    reps: {type: Number, required: true},
    weight: {type: Number, required: true},
    unit: {type: String, required: true}, // kg or lbs
    date: {type: String, required: true}  // mm-dd-yy format
});

// Compile model from schema
const Exercise = mongoose.model("Exercise", exerciseSchema);

// Create a new exercise
const createExercise = async (name, reps, weight, unit, date) => {
    const exercise = new Exercise({name: name, reps: reps, weight: weight, unit: unit, date: date});
    // Save document to the database
    return exercise.save();
};

// Get entire collection of exercises
const getExercises = async (filter, projection, limit) => {
    const query = Exercise.find(filter)
        .select(projection)
        .limit(limit);
    // Return documents
    return query.exec();
};

// Get a single document/exercise with the specificied id
const getById = async (_id) => {
    const query = Exercise.findById(_id);
    // Return document
    return query.exec();
};

// Update a document/exercise with the specified id
const updateExercise = async (_id, name, reps, weight, unit, date) => {
    // Modify the exercise
    const result = await Movie.updateOne({_id: _id}, {name: name, reps: reps, weight: weight, unit: unit, date: date});
    return result.matchedCount;
};

// Delete a document/exercise with the specified id
const deleteExercise = async (_id) => {
    // Delete the exercise
    const result = await Movie.deleteOne({_id: _id});
    return result.deletedCount;
};

export {createExercise, getExercises, getById, updateExercise, deleteExercise};