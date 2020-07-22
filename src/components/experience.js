/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Styled } from "theme-ui"

const Experience = () => (
  <>
    {" "}
    <h2 sx={{ my: 22, fontSize: 27 }}>Experience</h2>{" "}
    <ul
      sx={{
        listStyle: "none",
        p: 0,
        display: "grid",
        gridGap: 3,
        gridTemplateColumns: `repeat(auto-fit, minmax(228px, 1fr))`,
      }}
    >
      <li sx={{ maxWidth: 288 }}>
        <h3>
          <Styled.a href="https://joinoffstreet.com/">
            Offstreet Technology
          </Styled.a>
        </h3>
        Worked on a Automated visitor parking management System. The software
        helps Customers track, manage, and enforce your visitor parking.
      </li>

      <li sx={{ maxWidth: 288 }}>
        <h3>
          <Styled.a href="https://www.statcan.gc.ca/eng/start">
            Statistics Canada
          </Styled.a>
        </h3>
        Worked on an application based on key performance indicators that allow
        organizations to collect data and visualize key metrics about its
        business
      </li>

      <li sx={{ maxWidth: 288 }}>
        <h3>
          {" "}
          <Styled.a href="https://tricky-game.herokuapp.com/login">
            {" "}
            Online Tic Tac Toe Game
          </Styled.a>
        </h3>
        An online single/multiplayer tic-tac-toe game that leverages{" "}
        <Styled.a href="https://firebase.google.com/">Firebase</Styled.a> as the
        real time database and{" "}
        <Styled.a href="https://socket.io/">WebSockets</Styled.a>
      </li>

      <li sx={{ maxWidth: 288 }}>
        <h3>
          {" "}
          <Styled.a href="http://www2.cs.uregina.ca/~rendon2m/v3/login.php">
            {" "}
            Twitter Like Application
          </Styled.a>
        </h3>
        The project is a twitter like an application where the user can post
        messages and pictures, and users can comment on those post.
      </li>
    </ul>
  </>
)

export default Experience
