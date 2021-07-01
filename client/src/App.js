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

function App() {
  return (
   <>
    <div className="App">
      <GlobalStyle />
      <Nav />
      <LandingPage />
      {/* <Router>
          <Navbar />
          <Header />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/Dashboard" component={Dashboard} />
          <Footer />
     </Router> */}
    </div>
    </>
  );
}

export default App;
