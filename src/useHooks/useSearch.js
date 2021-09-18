import React, { useState, useEffect } from 'react'
import getcovByCountr from './../apiCall/covbycountry'
const Low = (ele) => {
    let res = ""
    for (let i = 0; i < ele.length; i++) res += ele[i].toLowerCase()
    if (res === "israel") return "palestine"

    return ele
}
const useSearch = () => {
    const [result, setResult] = useState({})
    const [countrysearch, setCountrySearch] = useState("")

    const handleSearch = () => {
        setCountrySearch(Low(countrysearch))
        console.log(Low(countrysearch))
        if (countrysearch)

            getcovByCountr(Low(countrysearch)).then(
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
                        country: res.country == "Tunisia" ? res.country + " Lkalba" : res.country
                    })
                }
            )


    }

    return { result, handleSearch, countrysearch, setCountrySearch }
}

export default useSearch