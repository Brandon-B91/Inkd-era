import React from "react";
import { Link } from "gatsby";
import Email from "../components/Email";

const Footer = () => {
  return (
    <div className="text-center site-footer">
      <h4 className="mt-2">
        Connect with us on social media for our latest contests and promotions!
      </h4>
      <div className="footer-ul mt-3">
        <ul>
          <li>
            <a
              href="http://instagram.com/Inkd_era"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram"
            >
              <i className="fab fa-instagram fa-2x text-light"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/InkdEra"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter"
            >
              <i className="fab fa-twitter fa-2x text-light"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/Inkderaofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="facebook"
            >
              <i className="fab fa-facebook-f fa-2x text-light"></i>
            </a>
          </li>
          <li>
            <a
              href="mailto:customerservice@Inkdera.com"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram"
            >
              <i className="fas fa-envelope fa-2x text-light"></i>
            </a>
          </li>
        </ul>
      </div>
      <Email className=""></Email>
      <ul className="d-flex flex-row justify-content-around p-0 mr-1 ml-">
        <li className="mr-2">
          <Link to="/info-pages/orderProcessing" className="text-light">
            Order processing
          </Link>
        </li>
        <li className="mr-2">
          <Link to="/info-pages/shippingPolicy" className="text-light">
            Shipping Policy
          </Link>
        </li>
        <li className="mr-2">
          <Link to="/info-pages/returnPolicy" className="text-light">
            Return Policy
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="text-light">
            Contact us
          </Link>
        </li>
      </ul>
      <cite> &#8482;Inkd Era 2021 </cite>
    </div>
  );
};

export default Footer;
