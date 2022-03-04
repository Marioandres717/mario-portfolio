import React from "react"

import * as experienceStyles from "../styles/experience.module.css"

const Experience = () => (
  <ul className={experienceStyles.unorderList}>
    <li>
      <a href="https://www.anomali.com/">
        <h3 className={experienceStyles.headers}>Anomali</h3>
      </a>
      I worked on the frontend of the website. I was responsible for multiple
      features, such as the search bar, the alerts, and links
    </li>
    <li>
      <a href="https://www.anomali.com/">
        <h3 className={experienceStyles.headers}>Brew Ninja</h3>
      </a>
      I worked on the frontend of the website. I was responsible for multiple
      features, such as the search bar, the alerts, and links
    </li>
    <li>
      <a href="https://joinoffstreet.com/">
        <h3 className={experienceStyles.headers}>Offstreet Technology</h3>
      </a>
      I worked on an automated visitor parking management System. The software
      helps property managers track, manage, and enforce visitor parking.
    </li>

    <li>
      <a href="https://www.statcan.gc.ca/eng/start">
        <h3 className={experienceStyles.headers}>Statistics Canada</h3>
      </a>
      I worked on an application based on key performance indicators that allow
      organizations to collect data and visualize critical metrics about its
      business
    </li>
  </ul>
)

export default Experience
