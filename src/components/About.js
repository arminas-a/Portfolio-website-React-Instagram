import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "./styles/css/About.css";

const About = () => (
  <div className="About">
    <CSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
      component="section"
      >
      <h2>About</h2>
    </CSSTransitionGroup>
  </div>
);

export default About;
