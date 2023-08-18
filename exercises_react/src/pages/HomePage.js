import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ExerciseTable from '../components/ExerciseTable';

function HomePage({ setExerciseToEdit }) {
    const navigate = useNavigate();

    // Declare state variable for exercise documents
    const [exercises, setExercises] = useState([]);

    // User clicks on delete icon
    const deleteExercise = async _id => {
        // Delete exercise by calling the DELETE endpoint
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });

        if (response.status === 204) {
            // Keep exercises that do not have the specified _id value
            setExercises(exercises.filter(e => e._id !== _id));
        } else {
            // Show an alert if deleting failed
            console.error(`Failed to delete exercise with _id ${_id}`)
        }
    };

    // User clicks on edit icon
    const editExercise = exercise => {
        // Update the state of exerciseToEdit to the chosen exercise
        setExerciseToEdit(exercise);
        // Navigate to '/edit-exercise'
        navigate('/edit-exercise');
    };

    // Get exercise documents
    const loadExercises = async () => {
        // Send GET request to '/exercises'
        const response = await fetch('/exercises');
        const data = await response.json();
        // Update the state of exercises based on response
        setExercises(data);
    };

    // Display all exercise documents on start up
    useEffect(() => {
        loadExercises();
    }, []);

    // Render heading and table with exercises
    return (
        <><h3 id="header">List of Exercises</h3>
        <ExerciseTable exercises={ exercises } deleteExercise={ deleteExercise } editExercise={ editExercise }/>
        </>
    );
}

export default HomePage;