import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Experience from "../components/experience"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Experience />
  </Layout>
)

export default IndexPage
