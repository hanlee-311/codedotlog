import React from 'react';
import PercentChart from '../Components/PercentChart';
import CreateButton from '../Components/CreateButton';
// import {Doughnut} from 'react-chartjs-2';
import GoalUI from '../Components/GoalListItem';
import Styled from 'styled-components';
import GoalListItem from '../Components/GoalListItem';

function Dashboard() {
    return (
        <>
            <DashboardContainer>
                <GoalList>
                    <GoalListItem/>            
                </GoalList>
            <PercentChart goalHours={5} progressHours={2} />
            <CreateButton />
            </DashboardContainer>
        </>
    )
};

const DashboardContainer = Styled.div
`
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
    max-height: 90vh;
    // padding: 
`
const GoalList = Styled.div
`
    flex-direction: row;
    display: flex;
    margin: 2rem;
`
export default Dashboard;