import React from 'react';
import SetGoal from '../Components/SetGoal';
import LogProgress from '../Components/LogProgress';

function GoalPage({quoteText, isEditting, setIsEditting}) {
    return(
        <>
          {isEditting ? <LogProgress setIsEditting={setIsEditting} isEditting={isEditting}/> : <SetGoal/>}
        </>
    )
};

export default GoalPage;