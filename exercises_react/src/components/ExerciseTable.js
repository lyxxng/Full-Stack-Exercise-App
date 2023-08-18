import React from 'react';
import ExerciseRow from './ExerciseRow';

function ExerciseTable({ exercises, deleteExercise, editExercise }) {
    // Render table with all exercises retrieved from GET request with an ExerciseRow component for each exercise
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise, i) => <ExerciseRow
                exercise={ exercise }
                deleteExercise={ deleteExercise }
                editExercise={ editExercise }
                key={ i } />)}
            </tbody>
        </table>
    );
}

export default ExerciseTable;