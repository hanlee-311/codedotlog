import React from 'react';
import SetGoal from '../Components/SetGoal';
import LogProgress from '../Components/LogProgress';

function GoalPage({quoteText, isEditting, setIsEditting}) {
    return(
        <>
          {isEditting ? <LogProgress/> : <SetGoal/>}
        </>
    )
};

export default GoalPage;