import React from 'react';
import Styled from 'styled-components';
import { Link } from "react-router-dom"

function Nav() {
    return (
      <StyledNav>
          <h1 id="logo"><a href="/">codedotlog</a></h1>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="#about">
              <li>About</li>
            </Link>
            <Link to="/">
              <li>Contact</li>
            </Link>
            <Link to="/Login">
              <li><NavButton>Login</NavButton></li>
            </Link>
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
    padding: 0 10rem;
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
        padding-left: 5rem;
        // position: relative;
    }
  `
const NavButton = Styled.button`
    margin: 0rem;
    color: #185ADB;
    padding: .5rem 1rem;
    }
`
  export default Nav;
  