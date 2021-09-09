import React from "react"
import {
  CovidLinear,
  Github,
  Instagram,
  Linkedin,
  SarsHub,
  Twitter,
} from "./SVG"
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

      <div className={styles.ff}>

        {props.worldcovidcomponent}
      </div>


      <div className={styles.bto}>
        <div className={styles.social}>
          <Link href="https://github.com/onlymachiavelli">
            <Github />
          </Link>
          &nbsp;&nbsp;
          <Link href="https://twitter.com/onlymachiavelli">
            <Twitter />
          </Link>
          &nbsp;&nbsp;
          <Link href="https://instagram.com/onlymachiavelli">
            <Instagram />
          </Link>
          &nbsp;&nbsp;
          <Link href="https://www.linkedin.com/in/alaa-ddin-472a651b9/">
            <Linkedin />
          </Link>
        </div>
        <div className={styles.languageselector}></div>
      </div>
    </div>
  )
}
export default Home