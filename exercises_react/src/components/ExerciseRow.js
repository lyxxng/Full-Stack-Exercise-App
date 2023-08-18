import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

function ExerciseRow({ exercise, deleteExercise, editExercise }) {
    // Render row with exercise properties and edit and delete functionalities
    return (
        <tr id="hover-color">
            <td>{ exercise.name }</td>
            <td>{ exercise.reps }</td>
            <td>{ exercise.weight }</td>
            <td>{ exercise.unit }</td>
            <td>{ exercise.date }</td>
            <td><MdEdit onClick={ () => editExercise(exercise) }/></td>
            <td><MdDelete onClick={ () => deleteExercise(exercise._id) }/></td>
        </tr>
    );
}

export default ExerciseRow;