import React from "react"
import Form from "../components/form"
import Layout from "../components/layout"
import TwoColumnLayout from "../components/two-column-layout"
import Animation from "../components/animation"
import SEO from "../components/seo"

import * as contactStyles from "../styles/contact.module.css"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className={contactStyles.container}>
      <Animation />
      <Form />
    </div>
  </Layout>
)

export default Contact
