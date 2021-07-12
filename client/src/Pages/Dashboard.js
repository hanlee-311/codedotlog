import React from 'react';
import PercentChart from '../Components/PercentChart';
import CreateButton from '../Components/CreateButton';

function Dashboard() {
    return (
        <>
            <PercentChart goalHours={5} progressHours={2} />
            <CreateButton />
        </>
    )
};

export default Dashboard;