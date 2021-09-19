import React, { useState, useEffect } from "react"
import styles from "./../styles/World.module.css"
import { WorldCases } from "./../src/apiCall/worldcovid"
import { Language } from "./../src/UI/language"
const World = () => {
  const [lan, setLan] = useState(Language.English)
  const [datas, setDatas] = useState([])
  WorldCases().then((res) => {
    setDatas(res)
  })

  return (
    <div className={styles.world}>
      <table className={styles.table}>
        <tr>
          <th>{lan.table.lvl}</th>
          <th>{lan.table.country}</th>
          <th>{lan.table.continent}</th>
          <th>{lan.table.flag}</th>
          <th>{lan.table.population}</th>
          <th>{lan.table.tcases}</th>
          <th>{lan.table.trec}</th>
          <th>{lan.table.tdeaths}</th>
          <th>{lan.table.tdcases}</th>
          <th>{lan.table.tdrec}</th>
          <th>{lan.table.tddeaths}</th>
          <th>{lan.table.active}</th>
          <th>{lan.table.critical}</th>
          <th>{lan.table.cpom}</th>
          <th>{lan.table.dpom}</th>
          <th>{lan.table.apom}</th>
          <th>{lan.table.rpom}</th>
          <th>{lan.table.crpom}</th>
          <th>{lan.table.tests}</th>
          <th>{lan.table.tpom}</th>
          <th>{lan.table.ocpp}</th>
          <th>{lan.table.odpp}</th>
        </tr>
        {datas
          .sort((a, b) => b.cases - a.cases)
          .map((arr, idx) => {
            if (arr.country.toLowerCase() !== "israel") {
              return (
                <tr key={`arr-${idx}`} id={styles.res}>
                  <th>{idx + 1}</th>
                  <th>{arr.country}</th>
                  <th>{arr.continent}</th>
                  <th>{lan.table.flag}</th>
                  <th>{arr.population}</th>
                  <th>{arr.cases}</th>
                  <th id={styles.rec}>{arr.recovered}</th>
                  <th id={styles.dead}>{arr.deaths}</th>
                  <th>{arr.todayCases}</th>
                  <th id={styles.rec}>{arr.todayRecovered}</th>
                  <th id={styles.dead}>{arr.todayDeaths}</th>
                  <th>{arr.active}</th>
                  <th id={styles.crt}>{arr.critical}</th>
                  <th>{arr.casesPerOneMillion}</th>
                  <th id={styles.dead}>{arr.deathsPerOneMillion}</th>
                  <th>{arr.activePerOneMillion}</th>
                  <th id={styles.rec}>{arr.recoveredPerOneMillion}</th>
                  <th id={styles.crt}>{arr.criticalPerOneMillion}</th>
                  <th>{arr.tests}</th>
                  <th>{arr.testsPerOneMillion}</th>
                  <th>{arr.oneCasePerPeople}</th>
                  <th>{arr.oneDeathPerPeople}</th>
                </tr>
              )
            }
          })}
      </table>
    </div>
  )
}
export default World
