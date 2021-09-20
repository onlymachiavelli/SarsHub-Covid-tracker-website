import React from "react"
import {
  SarsHub,
  Gihtub,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Heart,
} from "./SVG"

import styles from "./../../styles/Home.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_logo}>
        <SarsHub />
      </div>
      <div className={styles.footer_scl}>
        <a href="https://github.com/onlymachiavelli" target="_blank">
          <Github d="29" />
        </a>
        <a href="https://twitter.com/onlymachiavelli" target="_blank">
          <Twitter d="30" />
        </a>
        <a href="https://instagram.com/onlymachiavelli" target="_blank">
          <Instagram d="30" />
        </a>
        <a
          href="https://www.linkedin.com/in/alaa-ddin-472a651b9/"
          target="_blank"
        >
          <Linkedin d="29" />
        </a>
        <br />
        <br />
        <a id={styles.mail} href="mailto:tmakaveli643@gmail.com">
          tmakaveli643@gmail.com
        </a>
      </div>
      <div className={styles.copy}>
        <p>
          BUILT WITH <Heart /> BY @MACHIAVELLI
        </p>
      </div>
    </footer>
  )
}

export default Footer
