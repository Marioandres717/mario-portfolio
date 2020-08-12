/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Layout from "../components/layout"

const About = () => (
  <Layout>
    <div sx={{ maxWidth: 768 }}>
      <Styled.h1>ABOUT</Styled.h1>
      <Styled.p>
        I’m a full-stack JavaScript Engineer who’s passionate about web
        development and the impact it has on the world. In my free time, I
        always upgrade my knowledge by searching for the latest trends on
        Javascript. I strive for building modern web applications that deliver
        maximum efficiency in everyday life and challenge my knowledge while
        inspiring my creativity.
      </Styled.p>
    </div>
  </Layout>
)

export default About
