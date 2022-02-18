import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import SEO from "../components/seo";
import BlogPost from "../components/BlogPost";
import BestSellerSlider from "../components/BestSellerSlider";
import "../styles/main.scss";

const IndexPage = ({ data, location }) => {
  
  return (
    <Layout>
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        image={data.site.siteMetadata.image}
        pathname={location.pathname}
      ></SEO>
      console.log(pathname)
      {/* <BlogPost></BlogPost> */}
      <div className="shopAll mt-5">
        <h1>Welcome to Ink'd Era</h1>
        <h3 className="mb-5">Shop All Styles!</h3>
        <div className="shopAllBtns">
          <Link to="/men" className="link">
            Mens
          </Link>
          <Link to="/women" className="link">
            Womens
          </Link>
          <Link to="/accessories" className="link">
            Accessories
          </Link>
        </div>
      </div>
      <BestSellerSlider></BestSellerSlider>
      <div>
        {/* {data.allMarkdownRemark.edges.map(({ node }) => {
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
        })} */}
        <Link to="/Contest">
          <div className="contestLink d-flex flex-column justify-content-center mt-5 contestLink lazy">
            <h2 className="text-light"> Contests</h2>
            <h3 className="text-light">
              Do you like free things? Who doesn't!
            </h3>
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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
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
