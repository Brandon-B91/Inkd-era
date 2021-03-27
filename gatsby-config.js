module.exports = {
  siteMetadata: {
    title: "Inkd Era",
    description: "Clothing and brand built for tattoo and tattoed culture",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 650,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Inkd Era`,
      short_name: `Inkd era`,
      start_url: `/`,
      background_color: `#000`,
      theme_color: `#fafafa`,
      display: `standalone`,
      icon: `src/images/icon.png`,
    },
  },
  ],
};
