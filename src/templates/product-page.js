import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from '../components/seo'
import {
  Badge,
  Button,
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

const ProductPage = ({ data }) => {

  const post = data.markdownRemark;
  const image = getImage(post.frontmatter.image);
  const src = getSrc(post.frontmatter.image)
  return (
    <Layout>
      <SEO title={post.title} description={post.description}></SEO>
      <div className="full-page">
        <Row>
          <Col md="8 mt-4">
            <Card className="mt-4 product-card">
              <GatsbyImage
                className="card-img-top"
                image={image}
                alt={post.description}
              />
              <CardBody>
                <CardTitle className="h1 text-light text-wrap">
                  {post.frontmatter.title}
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
                {/* <Button className="btn btn-danger float-right btn-lg btn-block">
                  Buy
                </Button> */}
              </CardBody>
              <CardSubtitle className="text-center font-weight-light small mb-3">
                **Please allow 1-3 days for processing**
              </CardSubtitle>
            </Card>
          </Col>
          <Col md="4">
            {/* <label style={{ color: "#fafafa" }}>Quanitity:</label>
            <input id="quantity" type="number" style={{ width: "7%" }}></input>
            <label></label>
            <select id="size" className="btn btn-danger dropdown-toggle m-3">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select> */}
            <button
              className="btn btn-danger snipcart-add-item"
              id="1"
              data-item-id={post.frontmatter.title}
              data-item-price={post.frontmatter.price}
              data-item-url={"https://inkdera.com/" + post.fields.slug}
              data-item-description={post.frontmatter.description}
              data-item-image={src}
              data-item-name={post.frontmatter.title}
              data-item-custom1-name="Size"
              data-item-custom1-options="Small|Medium|large"
              // data-item-custom2-name="Gift note"
            >
              Add to cart!
            </button>
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
        image {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              height: 600
              placeholder: BLURRED
              formats: [AUTO, JPG]
              transformOptions: { fit: CONTAIN, cropFocus: ATTENTION }
            )
          }
        }
      }
      excerpt
    }
  }
`;

export default ProductPage;
