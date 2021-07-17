import React, { useState } from 'react';
import SetGoal from '../Components/SetGoal';
import Quote from '../Components/Quote';
import LogProgress from '../Components/LogProgress';
import isEditting from '../Components/EditButton';


function GoalPage({quoteText, isEditting}) {
 console.log(isEditting);

    return(
        <>
          {isEditting ? <LogProgress/> : <SetGoal/>}
        </>
    )
};

export default GoalPage;