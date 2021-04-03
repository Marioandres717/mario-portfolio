import Bio from "gatsby-theme-blog/src/components/bio"
import React, { Fragment } from "react"
import { Styled } from "theme-ui"

const BioContent = () => (
  <Fragment>
    <Bio />
    Words by <Styled.a href="http://marioandres.me/">Mario Andres</Styled.a>.
    <br />
  </Fragment>
)

export default BioContent
