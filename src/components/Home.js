import React from "react";
import { CSSTransitionGroup } from 'react-transition-group';


//Components

import Intro from "./Intro";
import Feed from "./Feed";

const Home = () => (
  <div className="Home">
    <CSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
      component="section"
    >
      <Intro />
      <Feed />
    </CSSTransitionGroup>
  </div>
);

export default Home;
