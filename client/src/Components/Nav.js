import React, { useState } from 'react';
import Styled from 'styled-components';
import { Link } from "react-router-dom";

import Auth from '../utils/auth';

function Nav() {
  return (
    <StyledNav>
      <h1 id="logo"><a href="/">codedotlog</a></h1>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/About">
          <li>About</li>
        </Link>
        <Link to="/Contact">
          <li>Contact</li>
        </Link>
        {Auth.loggedIn() ? (
          <>
            <Link to="/Dashboard">
              <li>Dashboard</li>
            </Link>
            <Link onClick={Auth.logout}>
              <li><NavButton>Logout</NavButton></li>
              </Link>
          </>
        ) : (
          <Link to="/Login">
            <li><NavButton>Login</NavButton></li>
          </Link>
        )}
      </ul>
    </StyledNav>
  );
}

const StyledNav = Styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    // padding: 0 10rem;
    width: 80%;
    a {
        color: #EFEFEF;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
        justify-content: center;
        align-items: center;
    }
    #logo {
        font-size: 1.5rem;
    }
    li {
        margin-left: 5rem;
        // position: relative;
        @media (max-width: 1300px){
          margin-left: 0;
          padding: 1rem;
    }
  `
const NavButton = Styled.button`
    margin: 0rem;
    color: #185ADB;
    padding: .5rem 1rem;
    }
`
export default Nav;
