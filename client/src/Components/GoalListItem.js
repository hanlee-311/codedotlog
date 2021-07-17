import React from 'react'
import Styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const GoalListItem = () => {
   const { loading, data } = useQuery(QUERY_ME);

  if (loading) {
    return <div>Loading...</div>;
  };

  if (!loading && data){
    console.log(data.me.goals[0]);
  };

  return data.me ? (
    <div>
      <GoalListBubble>{data.me.goals[0].language}</GoalListBubble>
      <GoalListBubble></GoalListBubble>
      {/* <GoalListBubble></GoalListBubble>
      <GoalListBubble></GoalListBubble> */}
    </div>
  ): null;
};
const GoalListBubble = Styled.span
  `
    height: 15vh;
    width: 15vh;
    background-color: #FFC947;
    border-radius: 50%;
    display: inline-block;
    margin: 0 4rem;
  `
const Text = Styled.h2 
`
  color: black;
  position: absolute;
  top: 50%;
  left: 50%;
`
export default GoalListItem
