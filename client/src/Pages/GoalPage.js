import React, { useState } from 'react';
import SetGoal from '../Components/SetGoal';
import Quote from '../Components/Quote';
import LogProgress from '../Components/LogProgress';


function GoalPage({quoteText, isEditting, setIsEditting}) {
 console.log(isEditting);

    return(
        <>
          {isEditting ? <LogProgress/> : <SetGoal/>}
        </>
    )
};

export default GoalPage;