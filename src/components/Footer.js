import React from "react";
import "./styles/css/Global.css";
import "./styles/css/Footer.css";

const Footer = () => (
  <div className="footer">
    <div className="footer-content">
      <div className="info-container">
        <div className="footer-logo">
          <h6>Footer</h6>
        </div>
        <hr />
        <div className="info-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            sequi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            sequi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            sequi.
          </p>
        </div>
      </div>
      <div className="social-media-container">
        <h6>Me on Social Media</h6>
        <hr />
        <ul className="social-media-list">
          <li className="social-media-network">
            <a href="">
              <span class="icon-brand2" />
              <p>Facebook</p>
            </a>
          </li>
          <li className="social-media-network">
            <a href="">
              <span class="icon-brand" />
              <p>Instagram</p>
            </a>
          </li>
          <li className="social-media-network">
            <a href="">
              <span class="icon-brand3" />
              <p>Linkedin</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
