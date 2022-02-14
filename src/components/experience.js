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
    </ul>
  </Fragment>
)

export default Experience
