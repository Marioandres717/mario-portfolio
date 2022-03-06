import React, { useState, useEffect } from "react"

export const THEME = {
  LIGHT: "light",
  DARK: "dark",
  GRAY: "gray",
  PURPLE: "purple",
  GREEN: "green",
  PINK: "pink",
}

export const ThemeContext = React.createContext({
  theme: THEME.LIGHT,
  toggleTheme: theme => {},
})

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeColor] = useState(() => {
    const theme = localStorage.getItem("theme-color")
    document.body.setAttribute("data-theme", theme)

    return theme ? theme : THEME.LIGHT
  })

  const setTheme = currTheme => {
    let color = THEME.LIGHT
    switch (currTheme) {
      case THEME.LIGHT:
        color = THEME.DARK
        break
      case THEME.DARK:
        color = THEME.GRAY
        break
      case THEME.GRAY:
        color = THEME.PURPLE
        break
      case THEME.PURPLE:
        color = THEME.GREEN
        break
      case THEME.GREEN:
        color = THEME.PINK
        break
      case THEME.PINK:
        color = THEME.LIGHT
        break
      default:
        color = THEME.LIGHT
    }
    setThemeColor(color)
  }

  useEffect(() => {
    localStorage.setItem("theme-color", theme)
    document.body.setAttribute("data-theme", theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
