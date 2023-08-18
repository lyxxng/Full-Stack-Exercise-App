import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EditExercisePage = ({ exerciseToEdit }) => {
    const navigate = useNavigate();

    // Add state variables for all properties
    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const editExercise = async () => {
        const editedExercise = {name, reps, weight, unit, date};
        
        // Update document in database through PUT request
        const response = await fetch(`/exercises/${ exerciseToEdit._id }`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            // Alert user that update was successful if response has status code 200
            alert("Successfully edited the exercise!");
        } else {
            // Alert user that update was unsuccessully otherwise
            alert("Failed to edit the exercise.");
        }
        // Send user back to homepage
        navigate('/');
    };

    return (
        <div>
            <h3 id="header">Edit Exercise</h3>
            <div id="left-align">
                <label for="name">Name: </label>
                <input
                    type="text"
                    name="name"
                    value={ name }
                    onChange={ e => setName(e.target.value) } />
                <br />
                <label for="reps">Reps: </label>
                <input
                    type="number"
                    name="reps"
                    value={ reps }
                    onChange={ e => setReps(e.target.value) } />
                <br />
                <label for="weight">Weight: </label>
                <input
                    type="number"
                    name="weight"
                    value={ weight }
                    onChange={ e => setWeight(e.target.value) } />
                <br />
                <label for="unit">Unit: </label>
                <select
                    name="unit"
                    onChange={ e => setUnit(e.target.value) }>
                    <option value="kgs">kgs</option>
                    <option value="lbs">lbs</option></select>
                <br />
                <label for="date">Date: </label>
                <input
                    type="text"
                    name="date"
                    value={ date }
                    onChange={ e => setDate(e.target.value) } />
            </div>
            <button
                onClick={editExercise}>Save</button>
        </div>
    );
}

export default EditExercisePage;