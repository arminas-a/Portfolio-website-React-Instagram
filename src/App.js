import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


//App components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
