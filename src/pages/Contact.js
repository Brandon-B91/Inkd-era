import React from "react";
import Layout from "../components/layout";
import ImgSlide from "../components/Slider";
import PropTypes from "prop-types";

const Contact = (props) => {
  return (
    <div>
      <Layout>
        <div className="full-page text-light">
          <ImgSlide></ImgSlide>
          <h1>Want to get in touch with us?</h1>
          <h3>Heres how!</h3>
          <p>
            Of course you can always reach out to us on social or thruough our
            E-mail address. We would love to hear from you for feedback
            suggestion concerns or even to comment on something or course for
            order status as well!
          </p>
          <ul className="contact-ul text-center">
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
            <li></li>
          </ul>
          <h4 className="mt-3">
            {" "}
            Something a little more complicated? fill out this form!{" "}
          </h4>
          <form name="Contact Form" method="POST" data-netlify="true" action="/Thanks" className="contact-form">
            <input type="hidden" name="form-name" value="Contact Form" />
            <div>
                <label className="mr-3">Your Name:</label>
                <input type="name" />
            </div>
            <div>
              <label className="mr-">Your Email:</label>
              <input type="email" name="email" />
            </div>
            <div>
              <label className="mr-3">Message:</label>
              <textarea name="message" />
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
