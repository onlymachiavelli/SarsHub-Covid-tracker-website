import React, { useState, useEffect } from 'react'
import useCountry from './useCountry'
import getcovByCountr from './../apiCall/covbycountry'
const useGetCovidStatsByGeo = () => {
    const [Gstats, setGstats] = useState({})
    const { country } = useCountry()
    useEffect(async () => {
        if (country.Country) {

            getcovByCountr(country.Country).then(
                (Response) => {
                    setGstats({
                        totalcases: Response.cases,
                        totaldeaths: Response.deaths,
                        totalrecovered: Response.recovered,
                        todaycases: Response.todayCases,
                        todaydeaths: Response.todayDeaths,
                        todayrecovered: Response.todayRecovered,
                        activecases: Response.active,
                        critical: Response.critical,
                    })
                }
            )
        }
    }, [country])
    return { Gstats }
}
export default useGetCovidStatsByGeo