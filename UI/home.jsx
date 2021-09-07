import React from "react"
import { CovidLinear } from "./SVG"
import styles from "./../styles/Home.module.css"
const Home = () => {
  return (
    <div className={styles.home_container}>
      <CovidLinear />
    </div>
  )
}
export default Home
