import React, { useState, useEffect } from "react"
import styles from "./../styles/Home.module.css"

const WorldInfo = (props) => {
  return (
    <div className={styles.worldinfo_container}>

      <div className={styles.flex_info_container}>
        <div className={styles.worldinfocard}>
          <p id={styles.card_title}>TOTAL CASES</p>
          <p className={styles.cardnum}>221,916,146</p>
        </div>&nbsp;
        <div className={styles.worldinfocard} id={styles.death_card}>
          <p id={styles.card_title}>TOTAL CASES</p>
          <p className={styles.cardnum}>2.916,146</p>
        </div>&nbsp;
        <div className={styles.worldinfocard} id={styles.recovered_card}>
          <p id={styles.card_title}>TOTAL CASES</p>
          <p className={styles.cardnum}>2.916,146</p>
        </div>
      </div>





      <div className={styles.flex_info_container}>
        <div className={styles.worldinfocard}>
          <p id={styles.card_title}>TOTAL CASES</p>
          <p className={styles.cardnum}>221,916,146</p>
        </div>&nbsp;
        <div className={styles.worldinfocard} id={styles.death_card}>
          <p id={styles.card_title}>TOTAL CASES</p>
          <p className={styles.cardnum}>2.916,146</p>
        </div>&nbsp;
        <div className={styles.worldinfocard} id={styles.recovered_card}>
          <p id={styles.card_title}>TOTAL CASES</p>
          <p className={styles.cardnum}>2.916,146</p>
        </div>&nbsp;
        <div className={styles.worldinfocard} id={styles.recovered_card}>
          <p id={styles.card_title}>TOTAL CASES</p>
          <p className={styles.cardnum}>2.916,146</p>
        </div>&nbsp;
        <div className={styles.worldinfocard} id={styles.recovered_card}>
          <p id={styles.card_title}>TOTAL CASES</p>
          <p className={styles.cardnum}>2.916,146</p>
        </div>
      </div>
    </div>
  )
}
export default WorldInfo
