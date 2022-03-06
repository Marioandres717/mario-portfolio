import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import * as reposStyles from "../styles/github-repos.module.css"

const Repos = () => {
  const gatsbyRepoData = useStaticQuery(graphql`
    query {
      github {
        user(login: "marioandres717") {
          repositories(
            orderBy: { field: UPDATED_AT, direction: DESC }
            first: 16
          ) {
            nodes {
              name
              url
              description
              homepageUrl
              repositoryTopics(first: 8) {
                edges {
                  node {
                    topic {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const { nodes } = gatsbyRepoData.github.user.repositories
  const listOfRepos = nodes.map(({ name, url }) => (
    <li key={url}>
      <a href={url}>{name.substring(0, 20)}</a>
    </li>
  ))

  return (
    <div className={reposStyles.container}>
      <ul>{listOfRepos}</ul>
    </div>
  )
}

export default Repos
