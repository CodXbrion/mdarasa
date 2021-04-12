import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// css import
import "./App.css";

import Navbar from "./components/NavbarComp";
import Footer from "./components/Footer";

// page imports
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import WhyUs from "./pages/WhyUs";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/whyus">
            <WhyUs />
          </Route>
          <Route exact path="/testimonials">
            <Testimonials />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="*">
            <Error />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
