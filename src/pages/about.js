import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import * as aboutStyles from "../styles/about.module.css"

const About = () => (
  <Layout>
    <SEO title="About Me" />
    <div className={aboutStyles.container}>
      <Image />
      <p className={aboutStyles.aboutMe}>
        I’m a Software Engineer who’s passionate about web development and its
        impact on the world. In my free time, I always on the look for the
        latest trends on Javascript. I strive to build modern web applications
        that deliver maximum efficiency in everyday life and challenge my
        experience while inspiring my creativity.
      </p>
    </div>
  </Layout>
)

export default About
