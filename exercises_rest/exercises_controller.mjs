import 'dotenv/config';
import * as exercises from './exercises_model.mjs';
import express from 'express';
import { checkSchema, validationResult } from 'express-validator';
import { SCHEMA, validDate } from './validator.mjs';

const PORT = process.env.PORT

const app = express();

app.use(express.json());

// Create an exercise
app.post('/exercises', checkSchema(SCHEMA), (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty() || !validDate(req.body.date)) {
        // If request body is not valid then send status code 400
        res.status(400).json({ Error: "Invalid request" });
    } else {
        exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
            .then(exercise => {
                // Reponse with JSON object and status code 201
                res.status(201).json(exercise);
            });
    }
});

// Get every exercise
app.get('/exercises', (req, res) => {
    // Empty filter
    const filter = {};

    exercises.getExercises(filter, '', 0)
        .then(exercises => {
            // Get entire collection
            res.json(exercises);
        });
});

// Get one exercise from _id param
app.get('/exercises/:_id', (req, res) => {
    // Save _id
    const exerciseId = req.params._id;

    exercises.getById(exerciseId)
        .then(exercise => {
            if (exercise !== null) {
                // Get exercise if _id exists
                res.json(exercise);
            } else {
                // Return status code 404 if _id does not exist
                res.status(404).json({ Error: "Not found" });
            }
        });
});

// Update an exercise with given _id param
app.put('/exercises/:_id', checkSchema(SCHEMA), (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty() || !validDate(req.body.date)) {
        // If request body is not valid then send status code 400
        res.status(400).json({ Error: "Invalid request" });
    } else {
        exercises.updateExercise(req.params._id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
            .then(updateCount => {
                if (updateCount === 0) {
                    // Could not find _id if no documents were updated
                    res.status(404).json({ Error: "Not found" })
                } else {
                    // _id was found, respond with updated JSON object
                    res.json({ _id: req.params._id, name: req.body.name, reps: req.body.reps, weight: req.body.weight, unit: req.body.unit, date: req.body.date });
                }
        });
    }
});

// Delete an exercise with given _id param
app.delete('/exercises/:_id', (req, res) => {
    // Try to delete document with given _id
    exercises.deleteExercise(req.params._id)
        .then(deleteCount => {
            if (deleteCount === 1) {
                // Document exists, send status code 204
                res.status(204).send();
            } else {
                // Return status code 404 if _id does not exist
                res.status(404).json({ Error: "Not found" });
            }
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});