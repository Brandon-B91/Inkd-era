import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Badge, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import SEO from "../components/seo";
import "../styles/main.scss";

const WomensStyles = ({ data, location }) => {
  return (
    <Layout>
      <SEO
        title="=Womens styles"
        description="Mens style Inkd Era shirts and tank top"
        pathname={location.pathname}
      ></SEO>
      <h1 className="text-light mt-5 mb-4">Womens Styles </h1>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const image = getImage(node.frontmatter.image);
          return (
            <div className="d-inline-flex">
              <div className="flex-row">
                <Card className="m-2 index-card">
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
      filter: { frontmatter: { gender: { eq: "female" } } }
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

export default WomensStyles;
