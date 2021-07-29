module.exports = {
  siteMetadata: {
    title: `Ink'd Era`,
    titleTemplate: `%s - Inkd era clothing`,
    description: `Clothing and brand built for tattoos and tattoed culture including pierced and alternative styles!`,
    url: "https://inkdera.com",
    siteUrl: "https://inkdera.com",
    image: "src/images/inkdEraLogoWhite.png",
    twitterUsername: "@InkdEra",
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
        name: `Ink'd Era`,
        short_name: `Ink'd Era`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: "src/images/inkdEraLogoWhite.png",
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
        icon: `src/images/inkdEraLogo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: "3.0.29",
        publicApiKey: "YmNjNDg4MjAtYjI0NS00ZTBjLTkxOTEtNjBhN2NmNzNmMDNlNjM3NDY0MDk2MTY2MzA1MTMz", // use public api key here or in environment variable
        defaultLang: "en",
        currency: "usd",
        openCartOnAdd: true,
        useSideCart: true,
        styles: false,
        // be careful with this mode cart. The cart in this mode has a bug of scroll in firefox
        locales: {
          en: {
            actions: {
              checkout: "Checkout",
            },
          },
        },
        templatesUrl: "/snipcart-templates.html",
        // not work on dev. Gatsby not serve html file in dev https://github.com/gatsbyjs/gatsby/issues/13072
        innerHTML: `
        <billing section="bottom">
          
        </billing>`,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
        head: true,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: "https://Inkdera.us6.list-manage.com/subscribe/post?u=3637eeb82811147446f9ee9e0&amp;id=3194e8106d", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
  ],
};
