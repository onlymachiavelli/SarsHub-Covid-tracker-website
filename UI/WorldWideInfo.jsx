import React, { useState, useEffect } from "react"
import styles from "./../styles/Home.module.css"

const WorldInfo = (props) => {
  return (
    <div className={styles.titletxt}>
      <p>{props.ttccases}</p>
    </div>
  )
}
export default WorldInfo
