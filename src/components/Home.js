import React from "react";
import Instafeed from "react-instafeed";
import { CSSTransitionGroup } from 'react-transition-group';
import "./styles/css/Global.css";
import "./styles/css/Home.css";

    class Home extends React.Component {
      render() {
        const Home = "Home";
        return (
          <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
          component="section"
        >
        <h1 className="Intro">Introduction</h1>
          <div id={Home} className="Home">

            <Instafeed
              limit="10"
              ref="instafeed"
              resolution="standard_resolution"
              sortBy="most-recent"
              target={Home}
              template='<a class="image-container" href="{{link}}"><img class="image" src="{{image}}" /><summary class="image-fade"><h3 class="image-caption">{{caption}}</h3></summary></a>'
              userId={`${process.env.REACT_APP_INSTAGRAM_USER_ID}`}
              clientId={`${process.env.REACT_APP_INSTAGRAM_CLIENT_ID}`}
              accessToken={`${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}`}
            />
          </div>
          </CSSTransitionGroup>
        );
      };
    };

export default Home;
