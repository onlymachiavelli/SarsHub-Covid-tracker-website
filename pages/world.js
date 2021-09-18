import React, { useState, useEffect } from 'react'
import styles from './../styles/World.module.css'
import { WorldCases } from './../src/apiCall/worldcovid'

const World = () => {
    return (
        <div className={styles.world}>
            <table>
                <tr>
                    <th>1</th>
                    <th>Tunisia</th>
                    <th><img src={"https://www.countryflags.io/TN/flat/64.png"} /></th>
                    <th>Total Cases</th>
                    <th>todayCases</th>
                    <th>deaths</th>
                    <th>todayDeaths</th>
                    <th>recovered</th>
                    <th>todayRecovered</th>
                    <th>active</th>
                    <th>critical</th>
                    <th>casesPerOneMillion</th>
                    <th>deathsPerOneMillion</th>
                    <th>tests</th>
                    <th>testsPerOneMillion</th>
                    <th>population</th>
                    <th>oneCasePerPeople</th>
                    <th>oneDeathPerPeople</th>
                    <th>activePerOneMillion</th>
                    <th>recoveredPerOneMillion</th>
                    <th>criticalPerOneMillion</th>


                </tr>
            </table>
        </div>
    )
}
export default World