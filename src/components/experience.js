import React from "react"

import { Fragment } from "react"

const Experience = () => (
  <Fragment>
    {" "}
    <h2 sx={{ my: 22, fontSize: 27 }}>Experience</h2>{" "}
    <ul>
      <li>
        <a href="https://joinoffstreet.com/">
          <h3>Offstreet Technology</h3>
        </a>
        I worked on an automated visitor parking management System. The software
        helps property managers track, manage, and enforce visitor parking.
      </li>

      <li>
        <a href="https://www.statcan.gc.ca/eng/start">
          <h3>Statistics Canada</h3>
        </a>
        I worked on an application based on key performance indicators that
        allow organizations to collect data and visualize critical metrics about
        its business
      </li>

      <li>
        {" "}
        <a href="https://tricky-game.herokuapp.com/login">
          {" "}
          <h3>Tic Tac Toe Game</h3>
        </a>
        I created an online tic-tac-toe game that leverages{" "}
        <a href="https://firebase.google.com/">Firebase</a> as the real-time
        database and <a href="https://socket.io/">WebSockets</a> for multiplayer
        functionality
      </li>

      <li>
        {" "}
        <a href="http://www2.cs.uregina.ca/~rendon2m/v3/login.php">
          <h3> Twitter Clone</h3>
        </a>
        I created a twitter-like application where the user can post messages
        and pictures, and other users can comment on those posts.
      </li>
    </ul>
  </Fragment>
)

export default Experience
