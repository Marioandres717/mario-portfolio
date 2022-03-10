import React, { useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { ThemeContext } from "../state/theme.context"
import "../styles/header.module.css"

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <header>
      <div>
        <Link to="/">home</Link>
        <Link to="/contact">contact</Link>
        <Link to="/cv">my cv</Link>
      </div>

      <button
        title="Cycle Color Mode"
        aria-label="Toggle Theme Mode"
        onClick={() => toggleTheme(theme)}
      >
        <svg viewBox="0 0 32 32" width="24" height="24" fill="currentcolor">
          <circle
            r={14}
            cx={16}
            cy={16}
            fill="none"
            stroke="currentcolor"
            strokeWidth={4}
          />
          <path
            d="
                    M 16 0
                    A 16 16 0 0 0 16 32
                    z
          "
          ></path>
        </svg>
      </button>
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
