/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const PostLink = ({ title, slug, date }) => (
  <article>
    <header>
      <h2
        sx={{
          fontSize: 27,
          my: 22,
          textTransform: "uppercase",
          letterSpacing: "0.2em",
        }}
      >
        <Link
          sx={{
            textDecoration: `none`,
            ":visited": {
              color: "text",
            },
            ":hover": {
              color: "primary",
            },
          }}
          to={slug}
        >
          {title || slug}
        </Link>
      </h2>
      <small sx={{ fontSize: 14, fontWeight: "bold" }}>{date}</small>
    </header>
  </article>
)

export default PostLink
