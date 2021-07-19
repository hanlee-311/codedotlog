import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

:root {
    --primary-color: #0A1931;
    --second-color: #185ADB;
    --emphasis-color: #FFC947;
    --accent-color: #EFEFEF;
  }

* {
    margin: 0;
    padding 0;
    box-sizing: border-box
}

html{
    @media (max-width: 1700px){
        font-size: 60%;
    }
}

body {
    background: var(--primary-color);
    color: var(--accent-color);
    // width: 100%;
    // display: flex;
    font-family: 'Raleway', sans-serif;

}

h1 {
    font-size: 5rem;
}
h2 {
    font-size: 3rem;
}
h3 {
    font-size: 2rem;
}

span {
    color: var(--emphasis-color);
}

button {
padding: 1rem 2rem;
margin: 2rem 0;
background:var(--emphasis-color);
color: var(--second-color);
border: none;
font-size: 1rem;
font-weight: bold;
text-decoration: none;
cursor: pointer;
text-transform: uppercase;
transition: all 0.5s ease;
&:hover{
    background-color: var(--accent-color);
    color: var(--primary-color);
}
`
;
export default GlobalStyle;