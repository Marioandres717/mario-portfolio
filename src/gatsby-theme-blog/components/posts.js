/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PostList from "gatsby-theme-blog/src/components/post-list"

const Posts = ({ posts }) => (
  <Layout>
    <SEO title="Blog Posts" />
    <div sx={{ maxWidth: 768, marginRight: "auto" }}>
      <PostList posts={posts} />
    </div>
  </Layout>
)

export default Posts
