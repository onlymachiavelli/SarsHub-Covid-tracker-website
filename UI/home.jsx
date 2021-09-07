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
        <div
          className={styles.geoloc}
          title={"DETECTED YOUR LOCATION : " + props.country}
        >
          <p>{props.country}</p> &nbsp;
          <div className={styles.flag_geo}>
            <img
              src={`https://www.countryflags.io/${props.countryC}/flat/64.png`}
            />
          </div>
        </div>
      </header>
      <div className={styles.desc}>
        <p></p>
      </div>
    </div>
  )
}
export default Home
