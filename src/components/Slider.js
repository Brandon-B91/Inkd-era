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
  speed: 1100,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ImgSlide = () => {
  return (
    <div>
      <Slider {...settings}>
        <div>
          <StaticImage
            className="mask"
            src="../images/grp1.jpeg"
            alt="Group photo for inkd era 1"
            placeholder="blurred"
            layout="constrained"
            width={1600}
            height={600}
            quality={100}
          />
        </div>
        <div>
          <StaticImage
            className="mask"
            src="../images/grp2.jpeg"
            alt="Group photo for inkd era 2"
            placeholder="blurred"
            layout="constrained"
            width={1600}
            height={600}
            quality={100}
          />
        </div>
        <div>
          <StaticImage
            src="../images/grp3.jpeg"
            alt="Group photo for inkd era 3"
            placeholder="blurred"
            layout="constrained"
            width={1600}
            height={600}
            quality={100}
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImgSlide;
