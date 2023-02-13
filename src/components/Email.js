import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { Form, Input } from "reactstrap";

function Email() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Mailchimp always responds with status code 200, accompanied by a string indicating the result of the response.
    const { result, msg } = await addToMailchimp(email);
    result === "success" && setEmail("");
    // Removes the HTML returned in some response messages in case of error
    setMessage(msg.split("<")[0]);
    setStatus(result);
  };

  const handleChange = (event) => setEmail(event.target.value);

  return (
    <Form className=" d-flex flex-column flex-sm-wrap">
      <p className="m-3">
        Sign Up for our newsletter and get notified when we drop new merch or
        contests!
      </p>
      <div>
        <Input
          style={{ width: "40%", margin: "0 auto", maxWidth: "500px" }}
          className="email-form d-inline"
          type="email"
          onChange={handleChange}
          value={email}
          placeholder="example@example.com"
          required
        />
        <span
          status={status}
          className={
            status === "success"
              ? console.log("success")
              : console.log("failure")
          }
        >
          {message}
        </span>
        <button
          // style={{width: "30%"}}
          type="submit"
          onClick={handleSubmit}
          className="btn btn-danger text-uppercase mt-4 mb-4 form-button"
        >
          Subscribe
        </button>
      </div>
    </Form>
  );
}

export default Email;
