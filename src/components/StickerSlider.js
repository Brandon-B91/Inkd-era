import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StaticImage } from "gatsby-plugin-image";

const settings = {
  autoplay: false,
  autoplaySpeed: 2500,
  arrows: true,
  dots: true,
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
            src="../images/stickers/groupsticker.jpeg"
            alt="icon"
            placeholder="blurred"
            layout="constrained"
            objectFit="contain"
            width={600}
            height={600}
          />
        </div>
        <div>
          <StaticImage
            className="mask"
            src="../images/stickers/mytattoossticker.jpeg"
            alt="icon"
            placeholder="blurred"
            layout="constrained"
            objectFit="contain"
            width={600}
            height={600}
          />
        </div>
        <div>
          <StaticImage
            src="../images/stickers/inkaddictsticker.jpeg"
            alt="icon"
            placeholder="blurred"
            layout="constrained"
            objectFit="contain"
            width={600}
            height={600}
          />
        </div>
        <div>
          <StaticImage
            src="../images/stickers/expensiveskinsticker.jpeg"
            alt="icon"
            placeholder="blurred"
            layout="constrained"
            objectFit="contain"
            width={600}
            height={600}
          />
        </div>
        <div>
          <StaticImage
            src="../images/stickers/inkaddictsticker.jpeg"
            alt="icon"
            placeholder="blurred"
            layout="constrained"
            objectFit="contain"
            width={600}
            height={600}
          />
        </div>
        <div>
          <StaticImage
            src="../images/stickers/inkordiesticker.jpeg"
            alt="icon"
            placeholder="blurred"
            layout="constrained"
            objectFit="contain"
            width={600}
            height={600}
          />
        </div>
        <div>
          <StaticImage
            src="../images/stickers/letsgetinkdsticker.jpeg"
            alt="icon"
            placeholder="blurred"
            layout="constrained"
            objectFit="contain"
            width={600}
            height={600}
          />
        </div>
        <div>
          <StaticImage
            src="../images/stickers/rathergetinkdsticker.jpeg"
            alt="icon"
            placeholder="blurred"
            layout="constrained"
            objectFit="contain"
            width={600}
            height={600}
          />
         </div>
      </Slider>
    </div>
  );
};

export default StickerSlider;