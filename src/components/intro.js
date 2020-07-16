/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const Intro = () => (
  <div sx={{ pb: 128, m: 0 }}>
    <h1 sx={{ mt: 0 }}>Mario Andres Rendon</h1>
    <p sx={{ fontSize: 18, fontWeight: "bold" }}>
      Fullstack Javascript Developer. Based in Regina, SK
    </p>
    <ul sx={{ pl: 0 }}>
      <Link
        sx={{
          pr: 2,
          fontSize: 18,
          fontWeight: "bold",
          textDecoration: "none",
          color: "text",
        }}
        to="/blog/"
      >
        Blog
      </Link>

      <a
        sx={{
          px: 2,
          fontSize: 18,
          fontWeight: "bold",
          textDecoration: "none",
          color: "text",
        }}
        href="https://twitter.com/marioandres717"
      >
        Twitter
      </a>

      <a
        sx={{
          px: 2,
          fontSize: 18,
          fontWeight: "bold",
          textDecoration: "none",
          color: "text",
        }}
        href="https://github.com/Marioandres717"
      >
        GitHub
      </a>
    </ul>
  </div>
)

export default Intro
