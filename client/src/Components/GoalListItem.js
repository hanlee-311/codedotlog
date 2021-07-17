import React from 'react'
import Styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const GoalListItem = () => {
   const { loading, data } = useQuery(QUERY_ME);
   const {me} = data; 
  console.log(me);
  
  
  return (
    <div>
      <GoalListBubble></GoalListBubble>
      <GoalListBubble></GoalListBubble>
      {/* <GoalListBubble></GoalListBubble>
      <GoalListBubble></GoalListBubble> */}
    </div>
  )
}

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
  display: flex;
`
export default GoalListItem
