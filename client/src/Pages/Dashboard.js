import React, { useState, useEffect } from 'react';
import PercentChart from '../Components/PercentChart';
import CreateButton from '../Components/CreateButton';
import Styled, { keyframes } from 'styled-components';
import GoalListItem from '../Components/GoalListItem';
import WeeklyProgressModal from '../Components/WeeklyModal';
import checkDay from '../utils/checkDay';
import EditButton from '../Components/EditButton';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Loading from '../Components/Loading';


function Dashboard({ isEditting, setIsEditting, modal, setModal }) {

    const [show, setShow] = useState(false);
    const [goalId, setGoalId] = useState("");
 

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (checkDay() && modal===false) {
            handleShow()
              setModal(true)
            };
    }, []);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);
    });

    const { loading, data } = useQuery(QUERY_ME, {
        pollInterval: 1000,
    });

    const handleBubbleClick = (id) => {
        setGoalId(id);
    };

    return (
        <>
            {isLoading == true ?
                <Loading /> :
                <div>
                    <WeeklyProgressModal show={show} onClose={handleClose} />
                    <Welcome>Welcome, {data.me.firstName}! Let's Check Your Progress!</Welcome>
                    <GoalTitle>-Your Goals-</GoalTitle>
                    <DashboardContainer>
                        <GoalList>
                            <GoalListItem handleBubbleClick={handleBubbleClick}></GoalListItem>
                        </GoalList>
                        <PercentChart goalId={goalId} setGoalId={setGoalId} />
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
    min-height: 24vh;
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
    font-size: 180%;
`

const GoalTitle = Styled.h4
`
    padding: .1em;
    text-align: center;
`

export default Dashboard;