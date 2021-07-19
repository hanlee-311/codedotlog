import React, { useState, useEffect } from 'react';
import PercentChart from '../Components/PercentChart';
import CreateButton from '../Components/CreateButton';
// import {Doughnut} from 'react-chartjs-2';
import Styled, { keyframes } from 'styled-components';
import GoalListItem from '../Components/GoalListItem';
import WeeklyProgressModal from '../Components/WeeklyModal';
import checkDay from '../utils/checkDay';
import EditButton from '../Components/EditButton';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Loading from '../Components/Loading';


function Dashboard({ isEditting, setIsEditting }) {
    const Function = () => {
        const { loading, error, data, refetch } = useQuery(QUERY_ME);
        useEffect(() => {
            refetch();
        }, [refetch]);
        const userData = data?.me;
        console.log(userData)
    };

    Function();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        // console.log(checkDay())
        if (checkDay()) handleShow();
    }, []);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);
    });

    const handleBubbleClick = (event) => {
        console.log(event);
    };

    return (
        <>
            {isLoading == true ?
                <Loading /> :
                <div>
                    <WeeklyProgressModal show={show} onClose={handleClose} />
                    <Welcome>Welcome! Let's Check Your Progress!</Welcome>
                    <DashboardContainer>
                        <GoalList>
                            <GoalListItem handleBubbleClick={handleBubbleClick}></GoalListItem>
                        </GoalList>
                        <PercentChart />
                        <ButtonContainer>
                            <CreateButton />
                            <EditButton isEditting={isEditting} setIsEditting={setIsEditting} />
                        </ButtonContainer>
                    </DashboardContainer>
                </div>
            }
        </>
    )
};

const DashboardAnimation = keyframes
`
 from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const DashboardContainer = Styled.div
    `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-height: 90vh; 
    animation-name: ${DashboardAnimation};
    animation-duration: 1s;
    animation-iteration-count: once;
    animation-fill-mode: forwards;
`

const GoalList = Styled.div
    `
    flex-direction: row;
    display: inline-block;
    margin: 2rem;
    max-width: 75%;
    height: 30vh;
    justify-content: center;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: #0A1931; 
    }

    &::-webkit-scrollbar-thumb {
        background: #ba8e25; 
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #705616; 
    }

`

const Text = Styled.h3
    `
    font-size: 2rem;
    font: white;
`

const ButtonContainer = Styled.div
    `
    display: flex;
    flex-direction: row;
    margin: 0 2rem;
    min-width: 80%;
    justify-content: space-between;
    align-items: center
`

const Welcome = Styled.h4
    `
    margin: 1em 0 1em 0;
    text-align: center;

`
export default Dashboard;