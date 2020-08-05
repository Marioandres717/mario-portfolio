/** @jsx jsx */
import { jsx } from "theme-ui"
import Github from "../assets/icons8-github.svg"
import Twitter from "../assets/icons8-twitter.svg"

const iconsStyle = {
  mx: 3,
  fill: theme => `${theme.colors.text}`,
}
const Icons = () => (
  <div sx={{ display: "flex", justifyContent: "center", py: 4 }}>
    <a href="https://twitter.com/marioandres717">
      {" "}
      <Twitter sx={iconsStyle} />
    </a>

    <a href="https://github.com/marioandres717">
      {" "}
      <Github sx={iconsStyle} />
    </a>
  </div>
)

export default Icons
