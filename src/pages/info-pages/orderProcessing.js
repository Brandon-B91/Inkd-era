import React from "react";
import Layout from "../../components/Layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Badge, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const orderProcessing = ({ data }) => {
  return (
    <div>
      <Layout>
        <div className="mt-5 text-light">
          <h1 className="mt-3"> Order Processing.</h1>
          <p style={{ width: "60%", margin: "20px auto" }}>
            In an attempt to make sure the quality is of the highest standard
            all items are made to order.
          </p>
          <h3 className="mt-5">Due to this a few things to keep in mind.</h3>
          <ul className="ul-order mt-3">
            <li className="mt-2">
              Orders of a high quantity may take a few days for processing.
            </li>
            <li className="mt-2">
              High volume of orders may delay processing of orders.
            </li>
            <li className="mt-2">
              Any expected delays of order will be communicated via email
              provided.
            </li>
          </ul>

          <h4 className="mt-5">We know it can be hard to wait...</h4>
          <p>
            Trust us we know how it feels to wait for your items. What we aim to
            do is make sure every item you receive is of highest quality to meet
            our standards. You might have to wait a day or so longer but this
            ensures that you will receive your items is the best condition
            possible.
          </p>
        </div>
        <div>
          <h2 className="text-light"> Check out some of our best sellers!</h2>
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
                      />
                    </Link>
                    <hr />
                    <CardBody>
                      <Link to={node.fields.slug}>
                        <CardTitle className="h4 text-light text-wrap">
                          {node.frontmatter.title}
                        </CardTitle>
                      </Link>
                      <CardSubtitle>
                        {node.frontmatter.description}
                      </CardSubtitle>
                      {/* <CardSubtitle>{node.excerpt}</CardSubtitle> */}
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
        </div>
      </Layout>
    </div>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tag: { eq: "POPULAR" }}}
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

export default orderProcessing;
