import React from 'react';
import { useHistory } from 'react-router-dom';

const EditButton = ({ isEditting, setIsEditting }) => {
    const history = useHistory();

    const handleEditClick = (event) => {
        event.preventDefault();
        setIsEditting(true);
        history.push('/GoalPage');
    };

    return (
        <div>
            <button onClick={handleEditClick}>Update</button>
        </div>
    )
};

export default EditButton
