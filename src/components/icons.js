import React from "react"

import Github from "../assets/icons8-github.svg"
import Twitter from "../assets/icons8-twitter.svg"
import * as iconsStyles from "../styles/icons.module.css"

// TODO: read socials from gatsby-config
const Icons = () => (
  <div className={iconsStyles.socials}>
    <a href="https://twitter.com/marioandres717">
      {" "}
      <Twitter />
    </a>

    <a href="https://github.com/marioandres717">
      {" "}
      <Github />
    </a>
  </div>
)

export default Icons
