import React from "react";
import "./styles/css/Global.css";
import "./styles/css/Footer.css";

const Footer = () => (
  <div className="Footer">
    <div className="Footer-content">
      <div className="Footer-info-container">
        <div className="Footer-logo">
          <h3>Footer</h3>
        </div>
        <hr />

        <div className="Footer-info">
          <p>Company info</p>
          <p>Company info</p>
          <p>Company info</p>
        </div>
      </div>
      <div className="Social-media">
        <h3>Social media</h3>
        <hr />
        <ul className="Social-media-list">
          <li className="Social-media-network">
            <a href="">
              <span class="icon-brand2"></span>
              <p>Facebook</p>
            </a>
          </li>
          <li className="Social-media-network">
          <a href="">
          <span class="icon-brand"></span>
              <p>Instagram</p>
            </a>
          </li>
          <li className="Social-media-network">
          <a href="">
          <span class="icon-brand3"></span>
              <p>Linkedin</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
