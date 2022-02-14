import React from "react"

import { Link } from "gatsby"
import Icons from "./icons"

const LinkStyle = {
  fontSize: 1,
  color: "text",
  textDecoration: "none",
  fontWeight: 700,
  mr: 3,
  letterSpacing: "0.2em",
  ":hover": {
    color: theme => theme.colors.primary,
  },
}

const Footer = () => (
  <div>
    <Icons />
    <footer>
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/contact">CONTACT</Link>
      <div />
      <div>© {new Date().getFullYear()} Mario Andres </div>{" "}
    </footer>
  </div>
)

export default Footer
