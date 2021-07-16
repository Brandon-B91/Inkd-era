import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StaticImage } from "gatsby-plugin-image";

const settings = {
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const StickerSlider = () => {
  return (
    <div>
      <Slider {...settings}>
        <div>
          <StaticImage
            className="mask"
            src="../images/grp1.jpg"
            alt="icon"
            placeholder="blurred"
            layout="constrained"
            objectFit="contain"
            width={1600}
            height={500}
          />
        </div>
        <div>
          <StaticImage
            className="mask"
            src="../images/grp2.jpg"
            alt="icon"
            placeholder="blurred"
            layout="constrained"
            objectFit="contain"
            width={1600}
            height={500}
          />
        </div>
        <div>
          <StaticImage
            src="../images/grp3.jpg"
            alt="icon"
            placeholder="blurred"
            layout="constrained"
            objectFit="contain"
            width={1600}
            height={500}
          />
        </div>
      </Slider>
    </div>
  );
};

export default StickerSlider;