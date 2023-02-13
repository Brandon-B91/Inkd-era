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
      {/* <BlogPost></BlogPost> */}
      <div className="shopAll mt-5">
        <h1>Welcome to Ink'd Era</h1>
        <h3 className="mb-5">Shop All Styles!</h3>
        <div className="shopAllBtns">
          <Link to="/Men" className="link btn1">
            Mens
          </Link>
          <Link to="/Women" className="link btn2">
            Womens
          </Link>
          <Link to="/Accessories" className="link btn3">
            Accessories
          </Link>
        </div>
      </div>
      <BestSellerSlider></BestSellerSlider>
      <div>
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
                  height: 350
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
