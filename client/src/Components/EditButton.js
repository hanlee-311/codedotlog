import React from 'react'
import { Link } from 'react-router-dom'

const EditButton = () => {
    return (
        <div>
            <Link to="/EditGoal">
            <button to="/EditGoal">Edit</button>
            </Link>
        </div>
    )
}

export default EditButton
