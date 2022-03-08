import React from "react"

import * as introStyles from "../styles/intro.module.css"

const Intro = () => (
  <div className={introStyles.container}>
    <h1>Mario Andres Rendon</h1>
    <p>
      Front-end developer at <a href="https://www.anomali.com/">Anomali. </a>
      Based in Regina, SK
    </p>
    <ul>
      <a href="https://twitter.com/marioandres717">Twitter</a>
      <a href="https://github.com/Marioandres717">GitHub</a>
      <a href="https://www.linkedin.com/in/mario-rendon/">LinkedIn</a>
    </ul>
  </div>
)

export default Intro
