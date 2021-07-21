import React from "react";
import Styled from 'styled-components';
import Computer from '@material-ui/icons/Computer';

function Footer() {
  return (
    <>
      <Phantom />
      <Container>
        <p style={{height:"4em", textAlign: "center", verticalAlign:"middle"}}><Computer/> ©2021 uncch trilogy bootcamp</p>
      </Container>
    </>
  );
};

const Container = Styled.div
  `
  background-color: #00000076;
  height: 4em;
  line-height: 4em;
  margin-top: 3em;
  position: absolute;
  left:0;
  bottom: -2000;
  right:0;
  z-index: -1;
`;

const Phantom = Styled.div
  `
  padding: 20px,
  height: 1000px,
  width: 100%,
  background-color: blue;
`;

export default Footer;
