import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => {
  const [colorMode, setColorMode] = useState()
  return (
    <header>
      <div>
        <div>
          <Link to="/">Home</Link>
        </div>

        <div>
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
