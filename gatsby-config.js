module.exports = {
  pathPrefix: "/health-supply",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "health-supply",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat \:400,600,700,800,900`,
          `Quicksand`,
        ],
        display: 'swap'
      }
    }
  ],
};