import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"

const About = () => (
  <Layout>
    <div sx={{ maxWidth: 768 }}>
      <h1 sx={{ fontSize: 36 }}>About</h1>
      <div sx={{ maxWidth: 500 }}>
        <Image />
      </div>
      <p sx={{ fontSize: 18 }}>
        I’m a full-stack JavaScript Engineer who’s passionate about web
        development and its impact on the world. In my free time, I always
        upgrade my knowledge by searching for the latest trends on Javascript. I
        strive to build modern web applications that deliver maximum efficiency
        in everyday life and challenge my experience while inspiring my
        creativity.
      </p>
    </div>
  </Layout>
)

export default About
