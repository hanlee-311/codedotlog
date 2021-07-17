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
    console.log(data.me.goals[1]);
  };

  return data.me ? (
    <div>
      <GoalListBubble><Text>{data.me.goals[1].language}</Text></GoalListBubble>
    </div>
  ): null;
};

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
  font-size: 100%;
  min-height: 100%;
`


export default GoalListItem
