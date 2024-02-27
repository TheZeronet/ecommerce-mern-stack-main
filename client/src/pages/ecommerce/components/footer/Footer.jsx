import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <hr style={{ borderBottom: "3px solid white", marginBottom: "30px" }} />
      <footer className="footer" style={{ color: "white" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>About Us:</h4>
              <p>Gaming ecommerce: diverse,</p>
              <p>convenient, secure.</p>
            </div>
            <div className="col-md-4">
              <h4>Quick Links:</h4>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Connect With Us:</h4>
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div id="footer-bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 copyright">
              <p>© 2024 Pixel-Cartel. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
