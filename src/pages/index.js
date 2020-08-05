import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Experience from "../components/experience"
import Repos from "../components/github-repos"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Experience />
    <Repos />
  </Layout>
)

export default IndexPage
