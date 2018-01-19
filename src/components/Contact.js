import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "./styles/css/Global.css";
import "./styles/css/Contact.css";

import Forms from "./Forms";

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
      <div className="Invitation">
        <h2>Contact us</h2>
        <p>Every great partnership starts from 'Hello'</p>
      </div>
      <div className="Form-container">
        <Forms />
      </div>
    </CSSTransitionGroup>
  </div>
);

export default Contact;
