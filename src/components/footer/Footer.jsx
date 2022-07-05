import React from "react";
import "./footer.css";
import { ReactComponent as Instagram } from "../../assets/Social-media/instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/Social-media/linkedin.svg";
import { ReactComponent as Tiktok } from "../../assets/Social-media/tiktok.svg";
import { ReactComponent as Twitter } from "../../assets/Social-media/twitter.svg";
import { ReactComponent as Facebook } from "../../assets/Social-media/facebook.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Logotitle } from "../../assets/logo-title.svg";

function Footer() {
  return (
    <footer>
      <div className="container-fluid container-lg d-flex justify-content-around py-5 px-2 footer-container flex-column flex-md-row">
        <div>
          <h3>Product</h3>

          <a href="/">Demo</a>
          <a href="/">Pricing</a>
          <a href="/">Road Map</a>
          <a href="/">Security</a>
          <a href="/">FAQ</a>
          <a href="/">Features</a>
        </div>
        <div>
          <h3>Resources</h3>

          <a href="/">Installation Manual</a>
          <a href="/">Release Note</a>
          <a href="/">Community Help</a>
        </div>
        <div>
          <h3>Company</h3>

          <a href="/">About us</a>
          <a href="/">Career</a>
          <a href="/">Press</a>
          <a href="/">Support</a>
        </div>
        <div className="newsletter">
          <div>
            <h3 className="mb-4">Newsletter</h3>
            <form className="d-flex flex-column flex-sm-row align-items-sm-center">
              <label htmlFor="email" name="email"></label>
              <input
                type="text"
                className="form-control shadow-none"
                placeholder="Enter your email"
              />
              <button type="submit" className="mx-sm-2">
                Suscribe
              </button>
            </form>
          </div>
          <div>
            <Twitter className="me-2" />
            <Linkedin className="mx-2" />
            <Tiktok className="mx-2" />
            <Facebook className="mx-2" />
            <Instagram className="mx-2" />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="mb-2">
          <Logo className="mx-2" />
          <Logotitle />
        </div>
        <p >© 2022 All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
