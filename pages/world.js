import React, { useState, useEffect } from 'react'
import styles from './../styles/World.module.css'
import { WorldCases } from './../src/apiCall/worldcovid'

const World = () => {
    return (
        <div className={styles.world}>
            <table>
                <tr>
                    <th>LVL</th>
                    <th>COUNTRY</th>
                    <th>CONTINENT</th>
                    <th>FLAG</th>
                    <th>population</th>
                    <th>Total Cases</th>
                    <th>recovered</th>
                    <th>deaths</th>
                    <th>todayCases</th>
                    <th>todayRecovered</th>
                    <th>todayDeaths</th>
                    <th>active</th>
                    <th>critical</th>
                    <th>casesPerOneMillion</th>
                    <th>deathsPerOneMillion</th>
                    <th>tests</th>
                    <th>testsPerOneMillion</th>
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