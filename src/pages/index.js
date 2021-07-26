import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Badge, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import ImgSlide from "../components/Slider";
import SEO from "../components/seo";
import "../styles/main.scss"; 

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
      ></SEO>
      <div className="img-slide">
        <ImgSlide></ImgSlide>
      </div>
      {/* <SpringSummerLine></SpringSummerLine> */}
      {/* <h1>{data.site.siteMetadata.title}</h1> */}
      <h2 className="text-light mt-3 mb-4">Newest Arrivals! </h2>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const image = getImage(node.frontmatter.image);
          return (
            <div className="d-inline-flex">
              <div className="flex-row">
                <Card className="m-2 index-card" key={node.id}>
                  <Link to={node.fields.slug}>
                    <GatsbyImage
                      className="card-img-top"
                      image={image}
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
            </div>
          );
        })}
          <h3 className="text-light text-center mt-3 mb-2"> Want to see our full selection? </h3>
          <Link to="/Men">
            <h3 className="btn btn-danger text-light m-1">Mens styles</h3>
          </Link>
          <Link to="/Women">
            <h3 className="btn btn-danger text-light m-1">Womens styles</h3>
          </Link>
          <Link to="/Accessories">
            <h3 className="btn btn-danger text-light m-1">Accessories</h3>
          </Link>
          <Link to="/Contest">
            <div className="contestLink d-flex flex-column justify-content-center mt-3">
              <h1 className="text-light"> Contests</h1>
              <h3 className="text-light"> Do you like free things? Who doesn't!</h3>
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
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { display: { eq: "Y" } } }
      limit: 16
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
                  height: 300
                  transformOptions: { cropFocus: CENTER }
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

export default IndexPage;
