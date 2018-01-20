import React from "react";
import Instafeed from "react-instafeed";
import { CSSTransitionGroup } from "react-transition-group";
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
      <div className="intro">
        <h1>Hello, my name is Jane Doe. </h1>
        <p>Feel free to browse some of my recent works.</p>
        </div>
        <div id={Home} className="home">
          <Instafeed
            limit="10"
            ref="instafeed"
            resolution="standard_resolution"
            sortBy="most-recent"
            target={Home}
            template="<a class=&quot;image-container&quot; href=&quot;{{link}}&quot;><img class=&quot;image&quot; src=&quot;{{image}}&quot; /><summary class=&quot;image-fade&quot;><h3 class=&quot;image-caption&quot;>{{caption}}</h3></summary></a>"
            userId={`${process.env.REACT_APP_INSTAGRAM_USER_ID}`}
            clientId={`${process.env.REACT_APP_INSTAGRAM_CLIENT_ID}`}
            accessToken={`${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}`}
          />
        </div>
      </CSSTransitionGroup>
    );
  }
}

export default Home;
