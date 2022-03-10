import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Repos from "../components/github-repos"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <h2>Projects</h2>
    <Repos />
  </Layout>
)

export default IndexPage
