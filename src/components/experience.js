/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import { Styled } from "theme-ui"

const Experience = () => (
  <Fragment>
    {" "}
    <h2 sx={{ my: 22, fontSize: 27 }}>Experience</h2>{" "}
    <Styled.ul>
      <Styled.li>
        <Styled.a href="https://joinoffstreet.com/">
          <Styled.h3>Offstreet Technology</Styled.h3>
        </Styled.a>
        Worked on a Automated visitor parking management System. The software
        helps Customers track, manage, and enforce your visitor parking.
      </Styled.li>

      <Styled.li>
        <Styled.a href="https://www.statcan.gc.ca/eng/start">
          <Styled.h3>Statistics Canada</Styled.h3>
        </Styled.a>
        Worked on an application based on key performance indicators that allow
        organizations to collect data and visualize key metrics about its
        business
      </Styled.li>

      <Styled.li>
        {" "}
        <Styled.a href="https://tricky-game.herokuapp.com/login">
          {" "}
          <Styled.h3>Tic Tac Toe Game</Styled.h3>
        </Styled.a>
        An online single/multiplayer tic-tac-toe game that leverages{" "}
        <Styled.a href="https://firebase.google.com/">Firebase</Styled.a> as the
        real time database and{" "}
        <Styled.a href="https://socket.io/">WebSockets</Styled.a>
      </Styled.li>

      <Styled.li>
        {" "}
        <Styled.a href="http://www2.cs.uregina.ca/~rendon2m/v3/login.php">
          <Styled.h3> Twitter Clone</Styled.h3>
        </Styled.a>
        The project is a twitter like an application where the user can post
        messages and pictures, and users can comment on those post.
      </Styled.li>
    </Styled.ul>
  </Fragment>
)

export default Experience
