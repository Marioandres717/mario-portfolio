import React from "react"
import Github from "../assets/icons8-github.svg"
import Twitter from "../assets/icons8-twitter.svg"

// TODO: read socials from gatsby-config
const Icons = () => (
  <div>
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
