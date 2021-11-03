import React, { useState, useEffect } from "react"
import styles from "./../styles/World.module.css"
import { WorldCases } from "./../src/apiCall/worldcovid"
import { Language } from "./../src/UI/language"
import { SarsHub } from "../src/UI/SVG"
import Link from "next/link"
const World = () => {
  useEffect(() => {
    document.title = "ALL COVID CASES "
  }, [])

  const [lan, setLan] = useState(Language.English)
  const [datas, setDatas] = useState([])
  WorldCases().then((res) => {
    setDatas(res)
  })

  return (
    <div className={styles.world}>
      <header className={styles.header}>
        <nav>
          <Link href="/">
            <a>
              <SarsHub />
            </a>
          </Link>
        </nav>
      </header>
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
              let countryflag = `https://flagcdn.com/w80/${arr.countryInfo.iso2}.png`
              countryflag = countryflag.toLowerCase()
              return (
                <tr key={`arr-${idx}`} id={styles.res}>
                  <th>{idx + 1}</th>
                  <th>{arr.country}</th>
                  <th>{arr.continent}</th>
                  <th>
                    <img src={countryflag} />
                  </th>
                  <th>{arr.population}</th>
                  <th id={Number(arr.cases) > 0 ? styles.cases : ""}>
                    {arr.cases}
                  </th>
                  <th id={Number(arr.recovered) > 0 ? styles.rec : ""}>
                    {arr.recovered}
                  </th>
                  <th id={Number(arr.deaths) > 0 ? styles.dead : ""}>
                    {arr.deaths}
                  </th>
                  <th id={Number(arr.todayCases) > 0 ? styles.cases : " "}>
                    + {arr.todayCases}
                  </th>
                  <th id={Number(arr.todayRecovered) > 0 ? styles.rec : ""}>
                    + {arr.todayRecovered}
                  </th>
                  <th id={Number(arr.todayDeaths) > 0 ? styles.dead : ""}>
                    + {arr.todayDeaths}
                  </th>
                  <th id={Number(arr.active) > 0 ? styles.cases : ""}>
                    {arr.active}
                  </th>
                  <th id={Number(arr.critical) > 0 ? styles.crt : ""}>
                    {arr.critical}
                  </th>
                  <th>{arr.casesPerOneMillion}</th>
                  <th
                    id={Number(arr.deathsPerOneMillion) > 0 ? styles.dead : ""}
                  >
                    {arr.deathsPerOneMillion}
                  </th>
                  <th>{arr.activePerOneMillion}</th>
                  <th
                    id={
                      Number(arr.recoveredPerOneMillion) > 0 ? styles.rec : ""
                    }
                  >
                    {arr.recoveredPerOneMillion}
                  </th>
                  <th
                    id={Number(arr.criticalPerOneMillion) > 0 ? styles.crt : ""}
                  >
                    {arr.criticalPerOneMillion}
                  </th>
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
