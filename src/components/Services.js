import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "./styles/css/Global.css";
import "./styles/css/Services.css";

const Services = () => (
  <div className="services">
    <CSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
      component="section"
    >
      <h2>Services</h2>
      <br />
      <article>
        <h3>Design</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptate
          maiores ratione quas exercitationem quia odit dicta excepturi,
          debitis, nihil suscipit cumque repellat? Unde optio eos incidunt
          molestias odit, ipsum deserunt eligendi blanditiis fugiat minus
          ratione corporis soluta dolorum nulla?
        </p>
      </article>
      <article>
        <h3>Design</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptate
          maiores ratione quas exercitationem quia odit dicta excepturi,
          debitis, nihil suscipit cumque repellat? Unde optio eos incidunt
          molestias odit, ipsum deserunt eligendi blanditiis fugiat minus
          ratione corporis soluta dolorum nulla?
        </p>
      </article>
      <article>
        <h3>Design</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptate
          maiores ratione quas exercitationem quia odit dicta excepturi,
          debitis, nihil suscipit cumque repellat? Unde optio eos incidunt
          molestias odit, ipsum deserunt eligendi blanditiis fugiat minus
          ratione corporis soluta dolorum nulla?
        </p>
      </article>
    </CSSTransitionGroup>
  </div>
);

export default Services;
