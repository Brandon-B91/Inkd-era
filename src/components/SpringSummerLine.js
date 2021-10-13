import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Badge, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const SpringSummerLine = () => (
  <div>
    {/* <div> */}
    <h2 className="text-light m-3">Spring / Summer line!</h2>
    <StaticQuery
      query={springSummerLine}
      render={(data) => (
        <div className="d-inline-flex flex-row">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div>
              <Card className="m-2 index-card" key={node.id}>
                <Link to={node.fields.slug}>
                  <GatsbyImage
                    className="card-img-top"
                    image={getImage(node.frontmatter.image)}
                    alt={node.frontmatter.description}
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
        </div>
      )}
    />
    {/* </div> */}
  </div>
);

const springSummerLine = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { line: { eq: "summer" } } }
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
                  formats: [AUTO, JPG]
                  width: 300
                  height: 200
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

export default SpringSummerLine;
