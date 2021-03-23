import React from "react";
import { Link } from "gatsby"
import Email from "../components/Email"

const Footer = (node) => {
  return (
    <div className="text-center site-footer">
      <h4 className="mt-2">
        Connect with us on social media for out latest contests, and promotions!
      </h4>
      <div className="footer-ul">
        <li>
          <a
            href="http://instagram.com/inkd_era"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </li>
        <li>
          <a
            href="mailto:customerservice@inkdera.com"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <i className="fas fa-envelope fa-2x"></i>
          </a>
        </li>
      </div>
      <Email className="m-3"></Email>
      <ul className="d-flex flex-row justify-content-center mt-3">
        <li className="mr-5"><Link to="/info-pages/orderProcessing" className="text-light">Order processing</Link></li>
        <li className="mr-5"><Link to="/info-pages/shippingPolicy" className="text-light">Shipping Policy</Link></li>
        <li className="mr-5"><Link to ="/info-pages/returnPolicy" className="text-light">Return Policy</Link></li>
      </ul>
      <cite> &#8482;Inkd Era 2021 </cite>
    </div>
  );
};

export default Footer;
