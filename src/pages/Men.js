import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import SEO from "../components/seo";
import "../styles/main.scss";

const MensStyles = ({ data, location }) => {
  return (
    <Layout>
      <SEO
        title="Mens Styles"
        description="Mens style Inkd Era shirts and tank tops"
        pathname={location.pathname}
      ></SEO>
      <h1 className="text-light mt-5 mb-4">Mens Styles </h1>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const image = getImage(node.frontmatter.image);
          return (
            <div className="d-inline-flex">
              <div className="flex-row">
                <Card className="m-2 card">
                  <Link to={node.fields.slug}>
                    <GatsbyImage
                      className="card-img-top"
                      image={image}
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
            </div>
          );
        })}
        <Link to="/Contest">
          <div className="contestLink d-flex flex-column justify-content-center">
            <h2 className="text-light"> Contests</h2>
            <h4 className="text-light">
              {" "}
              Do you like free things? Who doesn't!
            </h4>
            <h5 className="text-light">Click here to learn more!</h5>
          </div>
        </Link>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { gender: { eq: "male" } } }
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
            image {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  formats: [AUTO, JPG]
                  width: 300
                  height: 300
                  transformOptions: { fit: COVER, cropFocus: CENTER }
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

export default MensStyles;
