import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PostList from "gatsby-theme-blog/src/components/post-list"

const Posts = ({ posts }) => (
  <Layout>
    <SEO title="Blog Posts" />
    <PostList posts={posts} />
  </Layout>
)

export default Posts
