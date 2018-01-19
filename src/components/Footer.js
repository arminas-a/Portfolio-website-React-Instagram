import React from "react";
import "./styles/css/Global.css";
import "./styles/css/Footer.css";

const Footer = () => (
  <div className="Footer">
    <div className="Footer-content">
      <div className="Info-container">
        <div className="Footer-logo">
          <h6>Footer</h6>
        </div>
        <hr />

        <div className="Info-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sequi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sequi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sequi.</p>
        </div>
      </div>
      <div className="Social-media-container">
        <h6>Social media</h6>
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
