import React, { useState, useEffect } from 'react'
import getcovByCountr from './../apiCall/covbycountry'

const useSearch = () => {
    const [result, setResult] = useState({})
    const [countrysearch, setCountrySearch] = useState("")

    const handleSearch = () => {
        if (countrysearch)
            getcovByCountr(countrysearch).then(
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
                        flag: res.countryInfo.iso2,
                    })
                }
            )
    }

    return { result, handleSearch, countrysearch, setCountrySearch }
}

export default useSearch