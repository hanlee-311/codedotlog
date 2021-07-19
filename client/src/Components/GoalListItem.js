import React from 'react'
import Styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const GoalListItem = ({ handleBubbleClick }) => {
  const { loading, data } = useQuery(QUERY_ME);

  if (loading) {
    return <div>Loading...</div>;
  };

  if (!loading && data) {
    console.log(data.me.goals);
  };

  return data.me ? (
    <>
      {data.me.goals.map((goal) => {
        console.log(goal._id);
        return (<GoalListBubble onClick={handleBubbleClick} id={goal.language}><Text>{goal.language}</Text></GoalListBubble>)
      })}
    </>
  ) : null;
};

const GoalListBubble = Styled.div

  `
    height: 15vh;
    width: 15vh;
    background-color: #FFC947;
    border-radius: 50%;
    display: inline-block;
    margin: 0 4rem;
    top: 50%;
    transform: translateY(-0%);

  `
const Text = Styled.h2
  `
  color: black;
  display: flex;
  text-align: left;
  justify-content: center;
  align-items: center;
  font-size: 100%;
  min-height: 100%;
`


export default GoalListItem
