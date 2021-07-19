import React, { useEffect, useState } from 'react';

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, } from '@apollo/client';
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
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUsSection from './Components/AboutUsSection';
import ContactSection from './Components/ContactSection';
import EditPage from './Pages/EditPage';
import PrivateRoute from './utils/privateRoutes';
import PublicRoute from './utils/PublicRoute';
import FourZeroFour from './Components/404';

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
  const [isEditting, setIsEditting] = useState(false);
  console.log(isEditting);
  return (
    <ApolloProvider client={client}>
      <Router>
        <GlobalStyle />
        <Nav />
        <Switch>
          <PublicRoute exact path="/" component={LandingPage} />
          <PublicRoute exact path="/Login" component={LoginPage} />
          <Route exact path="/Dashboard">
          <Dashboard isEditting={isEditting} setIsEditting={setIsEditting} />
          </Route>
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/About" component={AboutUsSection} />
          <Route exact path="/Contact" component={ContactSection} />
          <Route>
          <GoalPage exact path="/GoalPage" isEditting={isEditting} setIsEditting={setIsEditting} />
          </Route>
          {/* <PrivateRoute exact path="/EditGoal" component={EditPage} /> */}
          <Route path="*" component={FourZeroFour} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
