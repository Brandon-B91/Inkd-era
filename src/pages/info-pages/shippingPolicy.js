import React from "react";
import Layout from "../../components/Layout";
import SEO from "../../components/seo";

const shippingPolicy = ([data]) => {
  return (
    <div>
      <Layout>
        <SEO
          title="Shipping Policy"
          description="Ink'd Era shipping policy"
        ></SEO>
        <div className="mt-5 full-page text-light">
          <h1 className="mt-3">Shipping Policy</h1>
          <p style={{ width: "60%", margin: "20px auto" }}>
            All items are shipped via USPS.
          </p>
          <p>
            (other shippings options are being explored and more will be
            available on that at a later date.)
          </p>
          <h3 className="mt-5">Due to this a few things to keep in mind.</h3>
          <ul className="ul-order mt-3">
            <li className="mt-2">
              We strive to get you your items as soon as possible.
            </li>
            <li className="mt-2">
              Due to the current situation of things shipping times may vary.
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
            our standards. You might have to wait a day or so longer to ensure
            that all items meet or quality and standards. This way your items
            are always up to your expectations.
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default shippingPolicy;
