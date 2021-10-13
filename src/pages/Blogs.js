import React from "react";
import Layout from "../components/Layout";
import { graphql, Link, StaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Badge, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import SEO from "../components/seo";
import "../styles/main.scss";

const Blog = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Blog posts"
        description="Blog posts related to tattoos, tattooing, tattoo shops, getting tattoos, tattoo artists."
      ></SEO>
      <div className="">
        <h2 className="text-light mt-5">Blogs</h2>
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
                        <span className="text-danger">
                          {node.frontmatter.date}
                        </span>{" "}
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
                      <CardSubtitle>
                        {node.frontmatter.description}
                      </CardSubtitle>
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
    </Layout>
  );
};

export const BlogPosts = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            author
            date(formatString: "MMM Do YYYY")
            description
            price
            tag
            image {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  formats: [AUTO, JPG]
                  transformOptions: { fit: COVER, cropFocus: CENTER }
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

export default Blog;
