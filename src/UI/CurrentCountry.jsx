import React from "react"
import styles from "./../../styles/Home.module.css"

const CurrentCountry = (props) => {
  let countryflag = `https://flagcdn.com/w80/${props.flag}.png`
  countryflag = countryflag.toLowerCase()
  return (
    <div className={styles.current_country_container}>
      <div style={{ textAlign: "center" }}>
        <p className={styles.gl_title}>{props.titles.covidstatsinyoucountry}</p>
        <br />
      </div>
      <div className={styles.ContainerCu}>
        <div className={styles.cflag}>
          <img id={styles.flag_cur} src={props.flag ? countryflag : ""} />
          <p id={styles.cname}>
            {props.country === "Tunisia"
              ? props.country + " Lkalba"
              : props.country}
          </p>
        </div>
        <div className={styles.currentflex}>
          <div className={styles.currentcard}>
            <p>{props.titles.totalcases}</p>
            <p>{props.tcases}</p>
          </div>
          <div
            className={styles.currentcard}
            id={Number(props.tdeaths) > 0 ? styles.death_card : ""}
          >
            <p>{props.titles.totaldeathcases}</p>
            <p>{props.tdeaths}</p>
          </div>
        </div>

        <div className={styles.currentflex}>
          <div
            className={styles.currentcard}
            id={Number(props.trec) > 0 ? styles.recovered_card : ""}
          >
            <p>{props.titles.totalrecoveredcases}</p>
            <p>{props.trec}</p>
          </div>
          <div className={styles.currentcard}>
            <p>{props.titles.todaycases}</p>
            <p>+ {props.tdcases}</p>
          </div>
        </div>

        <div className={styles.currentflex}>
          <div
            className={styles.currentcard}
            id={Number(props.tddeaths) > 0 ? styles.death_card : ""}
          >
            <p>{props.titles.todaydeaths}</p>
            <p>+ {props.tddeaths}</p>
          </div>
          <div
            className={styles.currentcard}
            id={Number(props.tdrec) > 0 ? styles.recovered_card : ""}
          >
            <p>{props.titles.todayrecovered}</p>
            <p>+ {props.tdrec}</p>
          </div>
        </div>

        <div className={styles.currentflex}>
          <div
            className={styles.currentcard}
            id={Number(props.active) > 0 ? styles.cases : ""}
          >
            <p>{props.titles.activecases}</p>
            <p>{props.active}</p>
          </div>
          <div
            className={styles.currentcard}
            id={Number(props.crit) > 0 ? styles.critical : ""}
          >
            <p>{props.titles.critical}</p>
            <p>{props.crit}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CurrentCountry
