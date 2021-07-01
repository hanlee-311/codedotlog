import React from 'react';
import Styled from 'styled-components';

function Nav() {
    return (
      <StyledNav>
          <h1 id="logo"><a href="#asd">codedotlog</a></h1>
          <ul>
              <li>
                  <a href="#LandingSection">Home</a>
              </li>
              <li>
                  <a href="#AboutUsSection">About</a>
              </li>
              <li>
                  <a href="#ContactSection">Contact</a>
              </li>
              <li>
                  <NavButton><a href="#filler">Login</a></NavButton>
              </li>
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
  