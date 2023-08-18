import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateExercisePage = () => {
    const navigate = useNavigate();

    // Add state variables for all properties
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const addExercise = async () => {
        const newExercise = {name, reps, weight, unit, date};
        
        // Add document to database through POST request
        const response = await fetch ('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 201) {
            // Alert user that exercise was created if response has status code 201
            alert("Successfully added the exercise!")
        } else {
            // Alert user that exercise was not created otherwise
            alert(`Failed to add exercise.`)
        }
        // Send user back to homepage
        navigate('/');
    };

    return (
        <div>
            <h3 id="header">Add Exercise</h3>
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
                onClick={addExercise}>Add Exercise</button>
        </div>
    )
}

export default CreateExercisePage;