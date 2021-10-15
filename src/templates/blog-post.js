import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/seo";
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
  const src = getSrc(post.frontmatter.image);

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={src}
        pathname={location.pathname}
      ></SEO>
      <div className="full-page mt-3">
        <Row>
          <Col md="8" className="mt-4">
            <Card className="mt-4 wide-card">
              <GatsbyImage
                className="card-image-top"
                image={image}
                alt={post.frontmatter.description}
              />
              <CardBody>
                <CardSubtitle className="text-left">
                  <span className="text-danger">{post.frontmatter.date}</span>{" "}
                  by {""}
                  <span className="text-danger">{post.frontmatter.author}</span>
                </CardSubtitle>
                <CardTitle className="h1 text-light text-wrap">
                  <h1>{post.frontmatter.title}</h1>
                </CardTitle>
                <CardSubtitle>{post.frontmatter.description}</CardSubtitle>
                <br />
                <CardText>
                  <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </CardText>
                {/* <CardSubtitle> */}
                <Badge color="danger float-right mb-3">
                  {post.frontmatter.tag}
                </Badge>
                {/* </CardSubtitle> */}
              </CardBody>
            </Card>
            {/* <div
              style={{ color: "#fafafa" }}
              dangerouslySetInnerHTML={{ __html: post.html }}
              className="m-3"
            /> */}
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
          ></Col>
        </Row>
      </div>
    </Layout>
  );
};

export const blogQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        date(formatString: "MMMM Do YYYY")
        title
        author
        description
        tag
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
      }
      excerpt(pruneLength: 160)
    }
  }
`;

export default ProductPage;
