import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

const EditButton = ({isEditting, setIsEditting}) => {
console.log(isEditting);
const history = useHistory();

const handleEditClick = (event) => {
    event.preventDefault();
    setIsEditting(true);
    console.log(isEditting);
    history.push('/GoalPage');
  };
    return (
        <div>
            <button onClick={handleEditClick}>Edit</button>
        </div>
    )
}

export default EditButton
