import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ExerciseTable from '../components/ExerciseTable';

function HomePage({ setExerciseToEdit }) {
    const navigate = useNavigate();

    const [exercises, setExercises] = useState([]);

    const deleteExercise = async _id => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });

        if (response.status === 204) {
            setExercises(exercises.filter(e => e._id !== _id));
        } else {
            console.error(`Failed to delete exercise with _id ${_id}`)
        }
    };

    const editExercise = exercise => {
        setExerciseToEdit(exercise);
        navigate('/edit-exercise');
    };

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    };

    useEffect(() => {
        loadExercises();
    }, []);

    return (
        <><h3 id="header">List of Exercises</h3>
        <ExerciseTable exercises={ exercises } deleteExercise={ deleteExercise } editExercise={ editExercise }/>
        </>
    );
}

export default HomePage;