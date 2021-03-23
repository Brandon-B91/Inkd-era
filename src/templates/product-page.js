import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
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
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../styles/main.scss";

const ProductPage = ({ data }) => {

  const post = data.markdownRemark;
  const image = getImage(post.frontmatter.image);
  return (
    <Layout>
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
                <CardText>
                {post.frontmatter.description}
                </CardText>
    
                <CardSubtitle className="float-left mb-3 font-weight-light">
                  Price: ${post.frontmatter.price}
                </CardSubtitle>
                <CardSubtitle>
                  <Badge color="danger float-right mb-3">
                    {post.frontmatter.tag}
                  </Badge>
                </CardSubtitle>
                <Button className="btn btn-danger float-right btn-lg btn-block">
                  Buy
                </Button>
              </CardBody>
              <CardSubtitle className="text-center font-weight-light small mb-3">
                **Please allow 1-3 days for processing**
              </CardSubtitle>
            </Card>
          </Col>
          <Col md="4"></Col>
        </Row>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
