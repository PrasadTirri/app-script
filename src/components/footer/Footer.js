import React from "react";
import insta from "../../images/svg.png";
import linkedin from "../../images/Vector.png";
import googlepay from "../../images/Group 136188.png";
import rupay from "../../images/rupay.png";
import paypal from "../../images/paypal.png";
import amez from "../../images/amex.png";
import applepay from "../../images/apple-pay.png";
import opay from "../../images/o-pay.png";
import usd from "../../images/United States of America (US).png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-1">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <p>BE THE FIRST TO KNOW</p>
            <p>Sign up for updates from metta muse.</p>
            <div style={{ display: "flex" }}>
              <input
                style={{
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  width: "100%",
                  marginRight: "20px",
                }}
                type="text"
                placeholder="Enter your e-mail..."
              />
              <button
                style={{
                  backgroundColor: "transparent",
                  border: '1px solid "#e5e5e5',
                  color: "#e5e5e5",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Subscribe
              </button>
            </div>
            <div className="mobile-width">
              {" "}
              <hr />
            </div>
          </div>

          <div className="contact-container">
            <h3>CONTACT US</h3>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
            <h3>CURRENCY</h3>
            <h4>
              <img src={usd} alt="UD dollars" />
              +USD
            </h4>
            <p>
              Transactions will be completed in Euros and cirrency reference is
              availble on hover.
            </p>
          </div>
          <div className="contact-mobile">
            <h3>CALL US</h3>
            <div className="call-us">
              <p>+44 221 133 5360</p> <li></li>
              <p>customercare@mettamuse.com</p>
            </div>
            <hr />
            <div>
              <h3>CURRENCY</h3>
              <h4>
                {" "}
                <img src={usd} alt="UD dollars" />
                +USD
              </h4>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-2-mobile">
          <div className="footer-2-1-mobile">
            <h2>metta muse</h2>
            <p>⌄</p>
          </div>
          <hr />
          <div className="footer-2-1-mobile">
            <h2>QUICK LINKS</h2>
            <p>⌄</p>
          </div>
          <hr />
          <div className="footer-2-1-mobile">
            <h2>FOLLOW US</h2>
            <p>⌄</p>
          </div>
          <hr />
          <div className="social-media">
            <h3>metta muse ACCEPTS</h3>
            <div style={{ display: "flex", gap: "5px" }}>
              <img src={googlepay} alt="googlepay" />
              <img src={rupay} alt="rupay" />
              <img src={paypal} alt="paypal" />
              <img src={amez} alt="amez" />
              <img src={applepay} alt="appplepay" />
              <img src={opay} alt="opay" />
            </div>
          </div>
        </div>
        <div className="footer-2">
          <div className="footer-2-1">
            <h2>metta muse</h2>
            <p>About Us</p>
            <p>Stories</p>
            <p>Artisans</p>
            <p>Boutiques</p>
            <p>Contact Us</p>
            <p>EU Compliances Docs</p>
          </div>
          <div className="footer-2-2">
            <h2>QUICK LINKS</h2>
            <p>Orsders & Shipping</p>
            <p>Join/Login as a Seller</p>
            <p>Payment & Pricing</p>
            <p>Refund & Returns</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="footer-2-3">
            <h2>FOLLOW US</h2>
            <img
              style={{ border: "1px solid white", borderRadius: "50%" }}
              src={insta}
              alt="instagram"
            />
            <img
              style={{
                border: "1px solid white",
                padding: "7px",
                marginLeft: "5px",
                borderRadius: "50%",
              }}
              src={linkedin}
              alt="linkedin"
            />
            <h3>metta muse ACCEPTS</h3>
            <div style={{ display: "flex", gap: "5px" }}>
              <img src={googlepay} alt="googlepay" />
              <img src={rupay} alt="rupay" />
              <img src={paypal} alt="paypal" />
              <img src={amez} alt="amez" />
              <img src={applepay} alt="appplepay" />
              <img src={opay} alt="opay" />
            </div>
          </div>
        </div>
        <p className="copyright">
          Copyright © 2023 mettamuse. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
