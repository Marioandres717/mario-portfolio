import React from "react"
import { Link } from "gatsby"

const Intro = () => (
  <div>
    <h1>Mario Andres Rendon</h1>
    <p>Fullstack Javascript Developer. Based in Regina, SK</p>
    <ul>
      <Link to="/blog/">Blog</Link>

      <a href="https://twitter.com/marioandres717">Twitter</a>

      <a href="https://github.com/Marioandres717">GitHub</a>
    </ul>
  </div>
)

export default Intro
