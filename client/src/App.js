
import React from 'react';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import 'bootstrap/dist/css/bootstrap.min.css';

// Loading Pages here
import GlobalStyle from "./Components/GlobalStyle";
import LandingPage from "./Pages/LandingPage";
import Nav from "./Components/Nav";
import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";
import SignUp from "./Pages/SignUp";
import GoalPage from "./Pages/GoalPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutUsSection from './Components/AboutUsSection';
import ContactSection from './Components/ContactSection';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  console.log(localStorage)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
<ApolloProvider client={client}>  
   <Router>
      <GlobalStyle />
      <Nav />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/Login" component={LoginPage} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/About" component={AboutUsSection} />
            <Route exact path="/Contact" component={ContactSection} />
            <Route exact path="/SetGoal" component={GoalPage} />
    </Router>
</ApolloProvider>
  );
}

export default App;
