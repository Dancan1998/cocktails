import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages

// import components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
