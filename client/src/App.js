
import React from 'react';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// Loading Pages here
import GlobalStyle from "./Components/GlobalStyle";
import LandingPage from "./Pages/LandingPage";
import Nav from "./Components/Nav";
import LoginPage from "./Pages/LoginPage";
import SignUp from "./Pages/SignUp";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GoalPage from "./Pages/GoalPage";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
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
            <Route exact path="/SignUp" component={SignUp} />
            {/* <Route exact path="/Dashboard" component={Dashboard} /> */}
            <Route exact path="/SetGoal" component={GoalPage} />
    </Router>
</ApolloProvider>
  );
}

export default App;
