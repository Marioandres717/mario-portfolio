import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DownloadButton from "../assets/download-button.svg"
import * as cvStyles from "../styles/cv.module.css"

const CV = () => (
  <Layout>
    <SEO title="CV" />
    <div className={cvStyles.cvContainer}>
      <div>
        <StaticImage
          src="../images/resume.jpg"
          alt="a picture of mario andres resume"
        />
        <a href="https://www.dropbox.com/s/hab6ry8mgd7xjc2/mario-resume.pdf?dl=1">
          <DownloadButton />
        </a>
      </div>
    </div>
  </Layout>
)

export default CV
