/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
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
        development and the impact it has on the world. In my free time, I
        always upgrade my knowledge by searching for the latest trends on
        Javascript. I strive for building modern web applications that deliver
        maximum efficiency in everyday life and challenge my knowledge while
        inspiring my creativity.
      </p>
    </div>
  </Layout>
)

export default About
