import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => {
  const [colorMode, setColorMode] = useState()
  return (
    <header>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1280,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <div p={2} sx={{ flex: "1 1 auto" }}>
          <Link
            to="/"
            sx={{
              color: "text",
              fontSize: 14,
              letterSpacing: 4,
              fontWeight: "bold",
              mr: 16,
              textDecoration: `none`,
              textTransform: "uppercase",
            }}
          >
            Home
          </Link>
        </div>

        <div p={2}>
          <button
            aria-label="Toggle Theme Mode"
            onClick={e => {
              setColorMode(colorMode === "default" ? "dark" : "default")
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentcolor"
            >
              <circle
                r={11}
                cx={12}
                cy={12}
                fill="none"
                stroke="currentcolor"
                strokeWidth={2}
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
