import React from "react"
import { CovidLinear, SarsHub } from "./SVG"
import styles from "./../styles/Home.module.css"
import Link from "next/link"
const Home = (props) => {
  return (
    <div className={styles.home_container}>
      <header className={styles.header}>
        <div className={styles.colin}>
          <CovidLinear />
        </div>
        <div className={styles.mainlogo}>
          <Link href="/">
            <SarsHub />
          </Link>
        </div>
        <div className={styles.geoloc}>
          <p>Maroc</p>
        </div>
      </header>
    </div>
  )
}
export default Home
