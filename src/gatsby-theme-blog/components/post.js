/** @jsx jsx */
import { jsx } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PostTitle from "gatsby-theme-blog/src/components/post-title"
import PostDate from "gatsby-theme-blog/src/components/post-date"
import PostFooter from "gatsby-theme-blog/src/components/post-footer"
import PostHero from "gatsby-theme-blog/src/components/post-hero"

const Post = ({ data: { post }, previous, next }) => (
  <Layout>
    <SEO
      title={post.title}
      description={post.excerpt}
      imageSource={
        post.socialImage
          ? post.socialImage?.childImageSharp?.fluid.src
          : post.image?.childImageSharp?.fluid.src
      }
      imageAlt={post.imageAlt}
    />
    <div sx={{ maxWidth: 768, marginRight: "auto" }}>
      <main>
        <article>
          <header>
            <PostHero post={post} />
            <PostTitle>{post.title}</PostTitle>
            <PostDate>{post.date}</PostDate>
          </header>
          <section>
            <MDXRenderer>{post.body}</MDXRenderer>
          </section>
        </article>
      </main>
      <PostFooter {...{ previous, next }} />
    </div>
  </Layout>
)

export default Post
