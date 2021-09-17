import React, { useState, useEffect } from 'react'
import getcovByCountr from './../apiCall/covbycountry'

const useSearch = (searchtxt) => {
    const [result, setResult] = useState({})

    useEffect(() => {
        getcovByCountr(searchtxt).then(
            res => {
                setResult({
                    totalcases: res.cases,
                    totaldeaths: res.deaths,
                    totalrecovered: res.recovered,
                    todaycases: res.todayCases,
                    todaydeaths: res.todayDeaths,
                    todayrecovered: res.todayRecovered,
                    activecases: res.active,
                    critical: res.critical,
                    flag: "",
                })
            }
        )
    }, [result])
    return result
}

export default useSearch