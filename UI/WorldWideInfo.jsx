import React, { useState, useEffect } from "react"
import styles from "./../styles/Home.module.css"

const WorldInfo = (props) => {
  return (
    <div className={styles.worldinfo_container}>

      <div className={styles.flex_info_container}>
        <div className={styles.worldinfocard}>
          <p id={styles.card_title}>{props.titles["totalcases"]}</p>
          <p className={styles.cardnum}>{props.tcases}</p>
        </div>&nbsp;
        <div className={styles.worldinfocard} id={styles.death_card}>
          <p id={styles.card_title}>{props.titles["totaldeathcases"]}</p>
          <p className={styles.cardnum}>{props.tdeaths}</p>
        </div>&nbsp;
        <div className={styles.worldinfocard} id={styles.recovered_card}>
          <p id={styles.card_title}>{props.titles["totalrecoveredcases"]}</p>
          <p className={styles.cardnum}>{props.trec}</p>
        </div>
      </div>





      <div className={styles.flex_info_container}>
        <div className={styles.worldinfocard}>
          <p id={styles.card_title}>{props.titles["todaycases"]}</p>
          <p className={styles.cardnum}>{props.tdcases}</p>
        </div>&nbsp;
        <div className={styles.worldinfocard} id={styles.death_card}>
          <p id={styles.card_title}>{props.titles["todaydeaths"]}</p>
          <p className={styles.cardnum}>{props.tddeaths}</p>
        </div>&nbsp;
        <div className={styles.worldinfocard} id={styles.recovered_card}>
          <p id={styles.card_title}>{props.titles["todayrecovered"]}</p>
          <p className={styles.cardnum}>{props.tdrec}</p>
        </div>&nbsp;
        <div className={styles.worldinfocard} id={styles.recovered_card}>
          <p id={styles.card_title}>{props.titles["activecases"]}</p>
          <p className={styles.cardnum}>{props.active}</p>
        </div>&nbsp;
        <div className={styles.worldinfocard} id={styles.recovered_card}>
          <p id={styles.card_title}>{props.titles["critical"]}</p>
          <p className={styles.cardnum}>{props.crit}</p>
        </div>
      </div>
    </div>
  )
}
export default WorldInfo
