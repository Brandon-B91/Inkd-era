import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import BestSellers from "../components/BestSellers";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Badge,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  CardSubtitle,
  Row,
} from "reactstrap";
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image";
import "../styles/main.scss";

const ProductPage = ({ data, pageContext }) => {
  const baseUrl = "https://Inkdera.com";
  const post = data.markdownRemark;
  const image = getImage(post.frontmatter.image);
  const imageback = getImage(post.frontmatter.image2);
  const src = getSrc(post.frontmatter.image);

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

  const currentPath = window.location.pathname


  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={src}
        pathname={currentPath}
      ></SEO>
      <div className="full-page">
        <Row>
          <Col md="8" className="mt-4">
            <Card className="mt-4 product-card">
              <Slider {...settings}>
                <div style={{ backgroundColor: "white" }}>
                  <GatsbyImage
                    className="card-image-top"
                    image={image}
                    alt={post.frontmatter.description}
                  />
                </div>
                <div style={{ backgroundColor: "white" }}>
                  <GatsbyImage
                    className="card-image-top"
                    image={imageback}
                    alt={post.frontmatter.description}
                    loading="lazy"
                  />
                </div>
              </Slider>
              <CardBody>
                <CardTitle className="h1 text-light text-wrap">
                  <h1>{post.frontmatter.title}</h1>
                </CardTitle>
                {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
                <CardText>{post.frontmatter.description}</CardText>

                <CardSubtitle className="float-left mb-3 font-weight-light">
                  Price: ${post.frontmatter.price}
                </CardSubtitle>
                <CardSubtitle>
                  <Badge color="danger float-right mb-3">
                    {post.frontmatter.tag}
                  </Badge>
                </CardSubtitle>
              </CardBody>
              <button
                style={{ width: "80%", margin: "0 auto" }}
                className="btn btn-danger snipcart-add-item mb-3"
                // id={data.node.id}
                data-item-id={post.frontmatter.title}
                data-item-price={post.frontmatter.price}
                data-item-url={"https://Inkdera.com/" + post.fields.slug}
                data-item-description={post.frontmatter.description}
                data-item-image={src}
                data-item-name={post.frontmatter.title}
                data-item-weight={post.frontmatter.weight}
                data-item-custom1-name={post.frontmatter.customField.name}
                data-item-custom1-options={post.frontmatter.customField.values}
                data-item-custom2-name={post.frontmatter.customField.gender}
                data-item-custom2-options={post.frontmatter.customField.list}
              >
                Add to cart!
              </button>
              <CardSubtitle className="text-center font-weight-light small mb-3">
                **Please allow 1-3 days for processing**
              </CardSubtitle>
            </Card>
            <div
              style={{ color: "#fafafa" }}
              dangerouslySetInnerHTML={{ __html: post.html }}
              className="m-3"
            />
            <h4 className="text-center text-light mt-3">
              Share this with your friends!
            </h4>
            <ul className="d-flex justify-content-center mt-4">
              <li className="mr-4">
                <a
                  href={
                    "https://www.facebook.com/sharer.php?u=" +
                    baseUrl +
                    pageContext.slug
                  }
                  className="facebook text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f fa-2x text-light"></i>
                </a>
              </li>
              <li className="mr-4">
                <a
                  href={
                    "https://www.twitter.com/share?text=Check this out! &url=" +
                    baseUrl +
                    pageContext.slug +
                    "&hashtags=Inkdera"
                  }
                  img
                  src={image}
                  className="twitter text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter fa-2x text-light"></i>
                </a>
              </li>
              <li className="mr-4">
                <a
                  href={
                    "mailto: ?subject=Check this out!&body=Check this out! %0D%0A %0D%0A " +
                    baseUrl +
                    pageContext.slug
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  <i className="fas fa-envelope fa-2x text-light"></i>
                </a>
              </li>
              <li>
                <a
                  href={
                    "sms:?&body=Check this out! " + baseUrl + pageContext.slug
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  <i class="fas fa-sms fa-2x text-light"></i>
                </a>
              </li>
            </ul>
          </Col>
          <Col
            md="4"
            className="text-light mt-4 d-flex flex-column align-items-center"
          >
            <BestSellers></BestSellers>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
        description
        price
        tag
        weight
        image {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 800
              placeholder: BLURRED
              formats: [AUTO, JPG]
              transformOptions: { fit: COVER, cropFocus: CENTER }
            )
          }
        }
        image2 {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 800
              placeholder: BLURRED
              formats: [AUTO, JPG]
              transformOptions: { fit: COVER, cropFocus: CENTER }
            )
          }
        }
        customField {
          name
          values
          gender
          list
        }
      }
      excerpt
    }
  }
`;

export default ProductPage;
