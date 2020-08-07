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
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
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
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/blog`,
      },
    },
    `gatsby-plugin-sharp`,
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
  ],
}
