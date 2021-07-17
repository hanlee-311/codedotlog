import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const EditButton = () => {
const [isEditting, setIsEditting] = useState(false);
console.log(isEditting);

const handleEditClick = (event) => {
    event.preventDefault();
    setIsEditting(true);
    console.log(isEditting);
  };
    return (
        <div>
            <Link to="/GoalPage">
            <button to="/GoalPage" onClick={handleEditClick}>Edit</button>
            </Link>
        </div>
    )
}

export default EditButton
