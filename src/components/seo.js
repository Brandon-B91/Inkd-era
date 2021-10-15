// import React from "react";
// import PropTypes from "prop-types";
// import { Helmet } from "react-helmet";
// import { useLocation } from "@reach/router";
// import { useStaticQuery, graphql } from "gatsby";
// const SEO = ({ title, description, image, article }) => {
//   const { pathname } = useLocation();
//   const { site } = useStaticQuery(query);
//   const {
//     defaultTitle,
//     titleTemplate,
//     defaultDescription,
//     siteUrl,
//     defaultImage,
//     twitterUsername,
//   } = site.siteMetadata;

//   const seo = {
//     title: title || defaultTitle,
//     description: description || defaultDescription,
//     image: `${siteUrl}${image || defaultImage}`,
//     url: `${siteUrl}${pathname}`,
//   };
//   return (
//     <Helmet title={seo.title} titleTemplate={titleTemplate}>
//       <html lang="en" />
//       <meta property="og:type" content="website" />
//       <meta name="description" content={seo.description} />
//       <meta name="image" content={seo.image} />
//       {seo.url && <meta property="og:url" content={seo.url} />}
//       {(article ? true : null) && <meta property="og:type" content="article" />}
//       {seo.title && <meta property="og:title" content={seo.title} />}
//       {seo.description && (
//         <meta property="og:description" content={seo.description} />
//       )}
//       {seo.image && <meta property="og:image" content={seo.image} />}
//       <meta name="twitter:card" content="summary_large_image" />
//       {twitterUsername && (
//         <meta name="twitter:creator" content={twitterUsername} />
//       )}
//       {seo.title && <meta name="twitter:title" content={seo.title} />}
//       {seo.description && (
//         <meta name="twitter:description" content={seo.description} />
//       )}
//       {seo.image && <meta name="twitter:image" content={seo.image} />}
//     </Helmet>
//   );
// };
// export default SEO;
// SEO.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
//   image: PropTypes.string,
//   article: PropTypes.bool,
// };
// SEO.defaultProps = {
//   title: null,
//   description: null,
//   image: null,
//   article: false,
// };
// const query = graphql`
//   query SEO {
//     site {
//       siteMetadata {
//         defaultTitle: title
//         titleTemplate
//         defaultDescription: description
//         siteUrl: url
//         defaultImage: image
//         twitterUsername
//       }
//     }
//   }
// `;

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, image: metaImage, title, pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const image =
    metaImage && metaImage.src
      ? `${site.siteMetadata.siteUrl}${metaImage.src}`
      : null
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null
  const keywords= keywords || site.siteMetadata.keywords // here you get your props or your metadata


  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "keywords",
          content: site.siteMetadata.keywords.join(","),
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  property: "og:image",
                  content: image,
                },
                {
                  property: "og:image:width",
                  content: metaImage.width,
                },
                {
                  property: "og:image:height",
                  content: metaImage.height,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
}

export default SEO
