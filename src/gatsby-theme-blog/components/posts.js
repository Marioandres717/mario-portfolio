/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PostList from "gatsby-theme-blog/src/components/post-list"
import { useStaticQuery, graphql } from "gatsby"

const Posts = () => {
  const query = useStaticQuery(graphql`
    query {
      allBlogPost {
        nodes {
          id
          date(formatString: "MM/DD/YYYY")
          excerpt
          slug
          tags
          title
        }
      }
    }
  `)
  console.log("query", query)
  return (
    <Layout>
      <SEO title="Blog Posts" />
      <div sx={{ maxWidth: 768, marginRight: "auto" }}>
        <PostList posts={query.allBlogPost.nodes} />
      </div>
    </Layout>
  )
}

export default Posts
