import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PostList from "gatsby-theme-blog/src/components/post-list"

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
