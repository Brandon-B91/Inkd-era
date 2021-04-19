import React from "react";
import Layout from "../components/Layout";
import ImgSlide from "../components/Slider";

const Contest = () => {
  return (
    <div>
      <Layout>
        <div className="full-page">
          <div className="img-slide">
            <ImgSlide></ImgSlide>
          </div>
          <div className="contest-page text-light">
            <h1>Contests!</h1>
            <p>
              This is how we do it. You want free stuff? We want to give it to
              you. Yeah it's just like that.
            </p>
            <div>
              <h2>How do you enter?</h2>
              <p>
                Well keep up with our social media which is where you will be
                able to see our contests. Depending on the contest is going
                depend on the rules. Yeah there is alaways something going on.
              </p>
            </div>
            <h3>You can win quite a few different things.</h3>
            <ul>
              <li className="text-left">Stickers!</li>
              <li className="text-left">
                Free clothes, your choice of design!
              </li>
              <li className="text-left">Exclusive items!</li>
              <li className="text-left">Signed Merchandise.</li>
            </ul>
            <p>
              So check out our social media where we will ask for our communitys
              opinion on who will win.
            </p>
            <h3>So what contest do we run and how can you participate?</h3>
            <p>Well that is pretty simple let's break it down</p>
            <ul>
              <li>We will run a weekly contest. The winner will be awarded a free sticker pack! (see our social media accounts for the weekly contest entries.)</li>
              <li>Then the 4 winners from each month (one weekly) will be voted for by our community to win one free article of clothing their choice of design!</li>
              <li>We will also run an exclusive contest once every three months. You will have the chance to win an item that is either no longer avilable in the shop or Maybe even a design we have not released yet!</li>
            </ul>
            <h5> Keep up with us as we are always looking for new winners and running new contests!</h5>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contest;
