import React from "react"

import * as styles from "../styles/two-column-layout.module.css"

export default function TwoColumnLayout({ children }) {
  return <div className={styles.twoColumnLayout}>{children}</div>
}
