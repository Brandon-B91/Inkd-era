import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  Badge,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
} from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  autoplay: true,
  autoplaySpeed: 0,
  arrows: false,
  className: "center",
  centerMode: true,
  dots: true,
  draggable: true,
  infinite: true,
  pauseOnHover: true,
  speed: 7000,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  cssEase: "linear",
  lazyLoad: "ondemand",
  responsive: [
    {
      breakpoint: 824,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
  ],
};

const BestSeller = () => (
  <div className="sliderSlide">
    <h2 className="text-light m-3 ">Best Sellers</h2>
    <StaticQuery
      query={BestSellerSlider}
      render={(data) => (
        <Slider {...settings}>
          {data.allMarkdownRemark.edges.map(({ node }, i) => (
            <div key={i}>
              <Card className="m-1 index-card" key={node.id}>
                <Link to={node.fields.slug}>
                  <GatsbyImage
                    className="card-img-top"
                    image={getImage(node.frontmatter.image)}
                    alt={node.frontmatter.description}
                    loading="lazy"
                  />
                </Link>
                <CardBody>
                  <Link to={node.fields.slug}>
                    <CardTitle className="h5 text-light text-wrap">
                      {node.frontmatter.title}
                    </CardTitle>
                  </Link>
                  <CardSubtitle className="mt-5">{node.frontmatter.description}</CardSubtitle>
                </CardBody>
                <CardFooter>
                  <CardSubtitle className="float-left d-inline price">
                    Price: ${node.frontmatter.price}
                  </CardSubtitle>
                  <CardSubtitle>
                    <Badge color="danger float-right d-inline badge">
                      {node.frontmatter.tag}
                    </Badge>
                  </CardSubtitle>
                </CardFooter>
              </Card>
            </div>
          ))}
        </Slider>
      )}
    />
  </div>
);

const BestSellerSlider = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tag: { eq: "BEST SELLER" } } }
      limit: 5
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            price
            tag
            line
            image {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  transformOptions: { fit: COVER, cropFocus: CENTER }
                  height: 300
                  width: 200
                )
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default BestSeller;
