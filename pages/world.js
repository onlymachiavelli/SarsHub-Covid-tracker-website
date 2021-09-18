import React, { useState, useEffect } from 'react'
import styles from './../styles/World.module.css'
import { WorldCases } from './../src/apiCall/worldcovid'
import { Language } from './../src/UI/language'
const World = () => {
    const [lan, setLan] = useState(Language.English)
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
                    <th>{lan.table.tdcases}</th>
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
            </table>
        </div>
    )
}
export default World