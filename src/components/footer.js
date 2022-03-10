import React from "react"

import { Link } from "gatsby"
import Icons from "./icons"

import "../styles/footer.module.css"

const Footer = () => (
  <footer>
    <Icons />
    <div>
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <div></div>
      <div>© {new Date().getFullYear()} Mario Andres </div>{" "}
    </div>
  </footer>
)

export default Footer
