import React from 'react';
import PercentChart from '../Components/PercentChart';
import CreateButton from '../Components/CreateButton';
import {Doughnut} from 'react-chartjs-2';

function Dashboard(){
    return(
 <>
 <PercentChart goalHours={5} progressHours={2} />
 <CreateButton />
 </>
    )
};

export default Dashboard;