import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Badge, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
 className: "center",
 centerMode: "center",
 autoplay: false,
 autoplaySpeed: 1,
 arrows: true,
 dots: true,
 infinite: true,
 speed: 500,
 slidesToShow: 4,
 slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 824,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const AccessorySlider = () => (
  <div className="sliderSlide">
    {/* <div> */}
    <h1 className="text-light m-3">Accessories</h1>
    <StaticQuery
      query={mensSlider}
      render={(data) => (
        <Slider {...settings}>
          {/* <div className="d-inline-flex flex-row"> */}
            {data.allMarkdownRemark.edges.map(({ node }, i) => (
              <div key={i}>
                <Card className="m-2 index-card" key={node.id}>
                  <Link to={node.fields.slug}>
                    <GatsbyImage
                      className="card-img-top"
                      image={getImage(node.frontmatter.image)}
                      alt={node.frontmatter.description}
                      loading="lazy"
                    />
                  </Link>
                  <hr />
                  <CardBody>
                    <Link to={node.fields.slug}>
                      <CardTitle className="h4 text-light text-wrap">
                        {node.frontmatter.title}
                      </CardTitle>
                    </Link>
                    <CardSubtitle>{node.frontmatter.description}</CardSubtitle>
                    {/* <CardSubtitle>{node.excerpt}</CardSubtitle>   */}
                    <CardSubtitle className="float-left mt-5">
                      Price: ${node.frontmatter.price}
                    </CardSubtitle>
                    <CardSubtitle>
                      <Badge color="danger float-right mt-5">
                        {node.frontmatter.tag}
                      </Badge>
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </div>
            ))}
          {/* </div> */}
        </Slider>
      )}
    />
    <Link to="/Accessories">
      <h3 className="btn btn-danger text-light mt-5 mb-5">See full accessory selection</h3>
    </Link>
    {/* </div> */}
  </div>
);

const mensSlider = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { gender: { eq: "accessory" } } }
      limit: 4
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
                  width: 300
                  height: 300
                  transformOptions: {cropFocus: CENTER}
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

export default AccessorySlider;
