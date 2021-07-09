// import About from "./Pages/About";
// import Dashboard from "./Pages/Dashboard";
// import Contact from "./Pages/Contact";
// import Login from "./Pages/Login";
// import SignUp from "./Pages/SignUp";
// import LandingPage from "./Pages/LandingPage";
// import GlobalStyle from "./components/GlobalStyle";

// Loading Pages here
import GlobalStyle from "./Components/GlobalStyle";
import LandingPage from "./Pages/LandingPage";
import Nav from "./Components/Nav";
import LoginPage from "./Pages/LoginPage";
import SignUp from "./Pages/SignUp";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
   <Router>
      <GlobalStyle />
      <Nav />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/Login" component={LoginPage} />
            <Route exact path="/SignUp" component={SignUp} />
            {/* <Route exact path="/Dashboard" component={Dashboard} /> */}
            <Route exact path="/SetGoal" component={GoalPage} />
    </Router>
  );
}

export default App;
