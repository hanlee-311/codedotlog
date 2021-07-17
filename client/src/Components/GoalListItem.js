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
        <GoalListBubble><Text>Text</Text></GoalListBubble>
    </div>
  )
}

const GoalListBubble = Styled.div
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
  text-align: left;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  min-height: 100%;
`


export default GoalListItem
