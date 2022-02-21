import { useState, useEffect } from "react"

export enum THEME_COLORS {
  LIGHT = "light",
  DARK = "dark",
  GRAY = "gray",
  PURPLE = "purple",
  GREEN = "green",
  PINK = "pink",
}

export const useTheme = () => {
  const [theme, setThemeColor] = useState(() => {
    const theme = localStorage.getItem("theme-color")
    document.body.setAttribute("data-theme", theme)

    return theme ? theme : THEME_COLORS.LIGHT
  })

  const setTheme = currTheme => {
    let color = THEME_COLORS.LIGHT
    switch (currTheme) {
      case THEME_COLORS.LIGHT:
        color = THEME_COLORS.DARK
        break
      case THEME_COLORS.DARK:
        color = THEME_COLORS.GRAY
        break
      case THEME_COLORS.GRAY:
        color = THEME_COLORS.PURPLE
        break
      case THEME_COLORS.PURPLE:
        color = THEME_COLORS.GREEN
        break
      case THEME_COLORS.GREEN:
        color = THEME_COLORS.PINK
        break
      case THEME_COLORS.PINK:
        color = THEME_COLORS.LIGHT
        break
      default:
        color = THEME_COLORS.LIGHT
    }
    setThemeColor(color)
  }

  useEffect(() => {
    localStorage.setItem("theme-color", theme)
    document.body.setAttribute("data-theme", theme)
  }, [theme])

  return [theme, setTheme]
}
