/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"

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
            }
          }
        }
      }
    }
  `)
  const { nodes } = gatsbyRepoData.github.user.repositories
  const listOfRepos = nodes.map(({ name, url }) => (
    <Styled.li>
      {" "}
      <Styled.a href={url}>{name}</Styled.a>
    </Styled.li>
  ))

  return (
    <div sx={{ py: 64 }}>
      <Styled.ul>{listOfRepos}</Styled.ul>
    </div>
  )
}

export default Repos
