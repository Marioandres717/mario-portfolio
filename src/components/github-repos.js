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
    <li key={url}>
      {" "}
      <Styled.a href={url} sx={{ fontSize: 14 }}>
        {name.substring(0, 20)}
      </Styled.a>
    </li>
  ))

  return (
    <div sx={{ py: 64 }}>
      <Styled.ul sx={{ gridGap: 32 }}>{listOfRepos}</Styled.ul>
    </div>
  )
}

export default Repos
