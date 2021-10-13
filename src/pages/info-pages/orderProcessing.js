import React from "react";
import Layout from "../../components/Layout";
import SEO from "../../components/seo";

const orderProcessing = ({ data }) => {
  return (
    <div>
      <Layout>
        <SEO
          title="Order processing."
          description="Ink'd Era order processsing page."
        ></SEO>
        <div className="mt-5 text-light">
          <h1 className="mt-3"> Order Processing.</h1>
          <p style={{ width: "60%", margin: "20px auto" }}>
            In an attempt to make sure the quality is of the highest standard
            all items are made to order.
          </p>
          <h3 className="mt-5">Due to this a few things to keep in mind.</h3>
          <ul className="ul-order mt-3">
            <li className="mt-2">
              Orders of a high quantity may take a few days for processing.
            </li>
            <li className="mt-2">
              High volume of orders may delay processing of orders.
            </li>
            <li className="mt-2">
              Any expected delays of order will be communicated via email
              provided.
            </li>
          </ul>

          <h4 className="mt-5">We know it can be hard to wait...</h4>
          <p>
            Trust us we know how it feels to wait for your items. What we aim to
            do is make sure every item you receive is of highest quality to meet
            our standards. You might have to wait a day or so longer but this
            ensures that you will receive your items is the best condition
            possible.
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default orderProcessing;
