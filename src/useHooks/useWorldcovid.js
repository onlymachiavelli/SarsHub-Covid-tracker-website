import React, { useState, useEffect } from 'react'
import WorldCovid from './../apiCall/worldcovid'
const useWorldCovid = () => {
    const [Wcovid, setWcovid] = useState({})

    useEffect(() => {
        WorldCovid().then(
            (res) => {
                setWcovid({
                    totalcases: res.cases,
                    totaldeaths: res.deaths,
                    totalrecovered: res.recovered,
                    todaycases: res.todayCases,
                    todaydeaths: res.todayDeaths,
                    todayrecovered: res.todayRecovered,
                    activecases: res.active,
                    critical: res.critical,
                })
            }
        )
    }, [])
    return { Wcovid }
}

export default useWorldCovid