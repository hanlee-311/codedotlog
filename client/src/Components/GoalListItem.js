import React from 'react'
import Styled from 'styled-components';
const GoalListItem = () => {
  return (
    <div>
      <GoalListBubble></GoalListBubble>
      <GoalListBubble></GoalListBubble>
      <GoalListBubble></GoalListBubble>
      <GoalListBubble></GoalListBubble>
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
