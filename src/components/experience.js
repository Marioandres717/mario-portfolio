import React from "react"

import * as experienceStyles from "../styles/experience.module.css"

const Experience = () => (
  <ul className={experienceStyles.unorderList}>
    <li>
      <a href="https://www.anomali.com/">
        <h3 className={experienceStyles.headers}>Anomali</h3>
      </a>
      Anomali delivers intelligence-driven cybersecurity solutions, including
      ThreatStream®, Match™, and Lens™. Companies use Anomali to enhance threat
      visibility, automate threat processing and detection, and accelerate
      threat investigation, response, and remediation.
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
        <h3 className={experienceStyles.headers}>Offstreet</h3>
      </a>
      Offstreet's license plate-based parking validation software helps
      organizations self-manage their complimentary employee, customer, and
      guest parking.
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
