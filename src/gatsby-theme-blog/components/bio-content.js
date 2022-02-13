import React, { Fragment } from "react"
import Bio from "gatsby-theme-blog/src/components/bio"

const BioContent = () => (
  <Fragment>
    <Bio />
    Words by <Styled.a href="http://marioandres.me/">Mario Andres</Styled.a>.
    <br />
  </Fragment>
)

export default BioContent
