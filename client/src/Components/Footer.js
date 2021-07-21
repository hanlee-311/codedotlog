import React from "react";
import Styled, { keyframes } from 'styled-components';

function Footer() {
  return (
    <>
      <Phantom />
      <Container></Container>
    </>
  );
};

const Container = Styled.div
  `
  background-color: #00000076;
  height: 4em;
  margin-top: 3em;
  position: absolute;
  left:0;
  bottom: -2000;
  right:0;
  z-index: -1;
`

const Phantom = Styled.div
  `
  padding: 20px,
  height: 1000px,
  width: 100%,
  background-color: blue;
`

export default Footer;
