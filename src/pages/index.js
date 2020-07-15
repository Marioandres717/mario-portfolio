/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 sx={{ mt: 0 }}>Mario Andres Rendon</h1>
    <p>Fullstack Javascript Developer. Based in Regina, SK</p>
    <Link sx={{ pr: 2, textDecoration: "none" }} to="/blog/">
      Blog
    </Link>
    <a
      sx={{ pl: 2, textDecoration: "none" }}
      href="https://github.com/Marioandres717"
    >
      GitHub
    </a>
  </Layout>
)

export default IndexPage
