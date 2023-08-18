import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EditExercisePage = ({ exerciseToEdit }) => {
    const navigate = useNavigate();

    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const editExercise = async () => {
        const editedExercise = {name, reps, weight, unit, date};
        
        const response = await fetch(`/exercises/${ exerciseToEdit._id }`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            alert("Successfully edited the exercise!");
        } else {
            alert("Failed to edit the exercise.");
        }
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
            <br />
            <button
                onClick={editExercise}>Save</button>
        </div>
    );
}

export default EditExercisePage;