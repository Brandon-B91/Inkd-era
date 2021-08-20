import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Badge, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const BestSellers = () => (
  <div>
    <h1>Check out our best sellers!</h1>
    <StaticQuery
      query={bestSellerQuery}
      render={(data) => (
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className="bestSellers">
              <Card className="m-4 index-card" key={node.id}>
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
  </div>
);

const bestSellerQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tag: { eq: "BEST SELLER" } } }
      limit: 2
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

export default BestSellers;
