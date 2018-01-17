import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "./styles/css/Contact.css";

const Contact = () => (
  <div className="Contact">
    <CSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
      component="section"
    >
      <h2>Contact</h2>
    </CSSTransitionGroup>
  </div>
);

export default Contact;
