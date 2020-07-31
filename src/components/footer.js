/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const LinkStyle = {
  fontSize: 1,
  color: "text",
  textDecoration: "none",
  fontWeight: 700,
  mr: 3,
  letterSpacing: "0.2em",
}

const Footer = () => (
  <footer
    sx={{
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      p: 2,
      variant: "styles.footer",
    }}
  >
    <Link sx={LinkStyle} to="/">
      HOME
    </Link>
    <Link sx={LinkStyle} to="/blog/">
      BLOG
    </Link>
    <Link sx={LinkStyle} to="/about/">
      ABOUT
    </Link>
    <div sx={{ mx: "auto" }} />
    <div sx={{ my: 2, display: "inline-block", fontSize: 1 }}>
      © {new Date().getFullYear()} Mario Andres{" "}
    </div>{" "}
  </footer>
)

export default Footer
