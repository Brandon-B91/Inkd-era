import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { Badge, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import SEO from "../components/seo";
import MenSlider from "../components/menSlider";
import WomenSlider from "../components/womenSlider";
import AccessorySlider from "../components/Accessories";
import "../styles/main.scss";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        image={data.site.siteMetadata.image}
      ></SEO>
      <div>
        <p className="mt-5 text-dark bg-light">
          Free shipping on all orders over $50!
        </p>
      </div>
      <div className="img-slide">
        <StaticImage
          className="mask"
          loading="lazy"
          src="../images/grp1.jpeg"
          alt="Group photo for inkd era 1"
          placeholder="blurred"
          layout="fullWidth"
        />
      </div>
      <MenSlider></MenSlider>
      <div>
        <StaticImage
          className="mask"
          loading="lazy"
          src="../images/grp2.jpeg"
          alt="Group photo for inkd era 2"
          placeholder="blurred"
          layout="fullWidth"
        />
      </div>
      <WomenSlider></WomenSlider>
      <div>
        <StaticImage
          className="mask"
          loading="lazy"
          src="../images/grp3.jpeg"
          alt="Group photo for inkd era 2"
          placeholder="blurred"
          layout="fullWidth"
        />
      </div>
      <AccessorySlider></AccessorySlider>
      {/* <SpringSummerLine></SpringSummerLine> */}
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
        {/* <h3 className="text-light text-center mt-3 mb-2"> Want to see our full selection? </h3>
          <Link to="/Men">
            <h3 className="btn btn-danger text-light m-1">Mens styles</h3>
          </Link>
          <Link to="/Women">
            <h3 className="btn btn-danger text-light m-1">Womens styles</h3>
          </Link>
          <Link to="/Accessories">
            <h3 className="btn btn-danger text-light m-1">Accessories</h3>
          </Link> */}
        <Link to="/Contest">
          <div className="contestLink d-flex flex-column justify-content-center mt-3">
            <h2 className="text-light"> Contests</h2>
            <h3 className="text-light">
              {" "}
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
