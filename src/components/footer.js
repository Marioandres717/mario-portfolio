/** @jsx jsx */
import { jsx } from "theme-ui"
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
  <div sx={{ py: 64 }}>
    <Icons />
    <footer
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        py: 2,
        variant: "styles.footer",
      }}
    >
      <Link sx={LinkStyle} to="/">
        HOME
      </Link>
      <Link sx={LinkStyle} to="/blog">
        BLOG
      </Link>
      <Link sx={LinkStyle} to="/about">
        ABOUT
      </Link>
      <Link sx={LinkStyle} to="/contact">
        CONTACT
      </Link>
      <div sx={{ mx: "auto" }} />
      <div sx={{ my: 2, display: "inline-block", fontSize: 1 }}>
        © {new Date().getFullYear()} Mario Andres{" "}
      </div>{" "}
    </footer>
  </div>
)

export default Footer
