module.exports = {
  siteMetadata: {
    title: `Mario Andres`,
    description: `Mario Andres Rendon Portfolio`,
    author: `Mario Andres Rendon`,
    siteUrl: `https://marioandres.me`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/marioandres717`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/marioandres717`,
      },
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/mario-rendon/`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GitHub`,
        fieldName: `github`,
        url: `https://api.github.com/graphql`,
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_API_KEY}`,
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
