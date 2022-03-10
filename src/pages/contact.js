import React from "react"
import Form from "../components/form"
import Layout from "../components/layout"
import TwoColumnLayout from "../components/two-column-layout"
import Animation from "../components/animation"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <TwoColumnLayout>
      <Animation />
      <Form />
    </TwoColumnLayout>
  </Layout>
)

export default Contact
