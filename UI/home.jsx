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

      {props.worldcovidcomponent}


      <div className={styles.bto}>
        <div className={styles.social}>
          <Link href="">
            <Github />
          </Link>
          &nbsp;&nbsp;
          <Link href="">
            <Twitter />
          </Link>
          &nbsp;&nbsp;
          <Link href="">
            <Instagram />
          </Link>
          &nbsp;&nbsp;
          <Link href="">
            <Linkedin />
          </Link>
        </div>
        <div className={styles.languageselector}></div>
      </div>
    </div>
  )
}
export default Home
