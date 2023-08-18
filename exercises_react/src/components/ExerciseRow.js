import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

function ExerciseRow({ exercise, deleteExercise, editExercise }) {
    return (
        <tr>
            <td>{ exercise.name }</td>
            <td>{ exercise.reps }</td>
            <td>{ exercise.weight }</td>
            <td>{ exercise.unit }</td>
            <td>{ exercise.date }</td>
            <td><MdEdit onCLick={ () => editExercise(exercise) }/></td>
            <td><MdDelete onCLick={ () => deleteExercise(exercise._id) }/></td>
        </tr>
    );
}

export default ExerciseRow;