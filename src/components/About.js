import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "./styles/css/Global.css";
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
      <br />
      <article>
        <img
          src="https://images.pexels.com/photos/324030/pexels-photo-324030.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb"
          alt=""
        />
      </article>
      <article>
        <h3>A few words about me</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptate
          maiores ratione quas exercitationem quia odit dicta excepturi,
          debitis, nihil suscipit cumque repellat? Unde optio eos incidunt
          molestias odit, ipsum deserunt eligendi blanditiis fugiat minus
          ratione corporis soluta dolorum nulla?
        </p>
      </article>
      <article>
        <h3>Education</h3>
        <p>1995-1998 Bachelor degree. Accounting. University of Northcap.</p>
        <p> 1992-1995 High school degree. Computing. College of Northcap.</p>
      </article>
      <article>
        <h3>Courses & Diplomas</h3>
        <p>2003 XML Diploma. W3Schools.</p>
        <p>2001 Internet Programming Course.</p>
      </article>
      <article>
        <h3>Work Experience</h3>
        <p>2001- Programmer. Northcap IT. Description</p>
        <p>1998-2001 Accountant. Northcap Auto. Description</p>
      </article>
    </CSSTransitionGroup>
  </div>
);

export default About;
