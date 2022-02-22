import React from "react"
import { Link } from "gatsby"

import * as introStyles from "../styles/intro.module.css"

const Intro = () => (
  <div className={introStyles.container}>
    <h1>
      CupCakezGod <br /> Mario Andres Rendon
    </h1>
    <p>
      Front-end developer at <a href="https://www.anomali.com/">Anomali. </a>
      Based in Regina, SK
    </p>
    <ul>
      <Link to="/blog/">Blog</Link>

      <a href="https://twitter.com/marioandres717">Twitter</a>

      <a href="https://github.com/Marioandres717">GitHub</a>
    </ul>
  </div>
)

export default Intro
