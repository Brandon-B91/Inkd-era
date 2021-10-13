import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Badge, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const BlogPost = () => (
  <div className="">
    <h2 className="text-light mt-5">Recent Blog</h2>
    <StaticQuery
      query={BlogPosts}
      render={(data) => (
        <div className="d-inline-flex flex-row justify-content-center">
          {data.allMarkdownRemark.edges.map(({ node }, i) => (
            <div key={i}>
              <Card className="wide-card p-0" key={node.id}>
                <Link to={node.fields.slug}>
                  <GatsbyImage
                    className="card-img-top"
                    image={getImage(node.frontmatter.image)}
                    alt={node.frontmatter.description}
                    loading="lazy"
                  />
                </Link>
                <CardBody>
                  <CardSubtitle className="text-left">
                    <span className="text-danger">{node.frontmatter.date}</span>{" "}
                    by {""}
                    <span className="text-danger">
                      {node.frontmatter.author}
                    </span>
                  </CardSubtitle>
                  <Link to={node.fields.slug}>
                    <CardTitle className="h2 text-light text-wrap">
                      {node.frontmatter.title}
                    </CardTitle>
                  </Link>
                  <CardSubtitle>{node.frontmatter.description}</CardSubtitle>
                  <br />
                  <CardSubtitle>{node.excerpt}</CardSubtitle>
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

const BlogPosts = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "blog" } } }
      limit: 1
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            description
            price
            tag
            line
            image {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  transformOptions: { cropFocus: CENTER }
                )
              }
            }
          }
          fields {
            slug
          }
          excerpt(format: PLAIN, pruneLength: 180, truncate: true)
        }
      }
    }
  }
`;

export default BlogPost;
