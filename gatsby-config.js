module.exports = {
  siteMetadata: {
    title: `Inkd Era`,
    titleTemplate: `%s - Inkd era clothing`,
    description: `Clothing and brand built for tattoos and tattoed culture`,
    url: "https://inkdera.com",
    siteUrl: "https://inkdera.com",
    image: "",
    twitterUsername: "",
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
    {
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: "3.0.29",
        publicApiKey: "NzM0Y2QxZDAtOTliNS00NTU4LTliZGYtMjUyNTZjMjc4MDRiNjM3NDY0MDk2MTY2MzA1MTMz", // use public api key here or in environment variable
        defaultLang: "en",
        currency: "usd",
        openCartOnAdd: true,
        useSideCart: true,
        // be careful with this mode cart. The cart in this mode has a bug of scroll in firefox
        locales: {
          en: {
            actions: {
              checkout: "Checkout",
            },
          },
        },
        templatesUrl:
          "/snipcart-templates.html",
        // not work on dev. Gatsby not serve html file in dev https://github.com/gatsbyjs/gatsby/issues/13072
        innerHTML: `
        <billing section="bottom">
   
        </billing>`,
      },
    },
  ],
};
