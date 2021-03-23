import React from "react";
import Layout from "../../components/Layout";

const orderProcessing = (props) => {
  return (
    <div>
      <Layout>
        <div className="mt-5 full-page text-light">
          <h1 className="mt-3">Return Policy</h1>
          <p style={{width: "60%", margin: "20px auto"}}>
              All returns must be requested within 30 days of receiving item.
        </p>
        <h3 className="mt-5">How to manange returns</h3>
        <ul className="ul-order mt-3">
            <li className="mt-2">Contact us thru social media or email to get started.</li>
            <li className="mt-2">For returns you will be subject to paying rewturn shipping.</li>
            <li className="mt-2">refund will be processed once the item is received.</li>
        </ul>

        <h4 className="mt-5">
            Damaged items
        </h4>
        <p>
            If you receive a damaged item. Please reach out to us directly and be able to provide pictures of the damaged items,
            item will be replaced at no cost to you. Item will be replaced with the exact same size and design. if damaged 
            item is not an article of clothing. (stickers, decals, etc...) the item will be replaced with the exact same of item 
            that is damaged.
        </p>
        <p>
            Please allow standard processing times for all items. Once we have been contatcted for a return or damaged item.
            We will work imemdiately on getting a new one out as soon as possible.
        </p>
        </div>
      </Layout>
    </div>
  );
};

export default orderProcessing;
