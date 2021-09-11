import React, { useEffect, useState } from "react"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Home from "./../UI/home"
import axios from "axios"
import { Language as L } from "./../UI/language"
import WorldInfo from './../UI/WorldWideInfo'
import CurrentCountry from "../UI/CurrentCountry"
const GetGeo = async () => {
  const response = await axios
    .get(`https://api.db-ip.com/v2/free/self`)
    .then((res) => res.data)
  return response
}

const useCountry = () => {
  const [country, setCountry] = useState({})
  useEffect(() => {
    GetGeo().then((Res) => {
      setCountry({
        CountryCode: Res.countryCode,
        Country: Res.countryName,
      })
    })
  }, [])

  return { country, setCountry }
}
const WorldCovid = async () => {
  const response = await axios
    .get(`https://disease.sh/v3/covid-19/all/`)
    .then((res) => res.data)
  return response
}
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


const getcovByCountr = async (country) => {
  const response = await axios
    .get(`https://disease.sh/v3/covid-19/countries/${country}/`)
    .then((res) => res.data)
  return response
}



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

const App = () => {
  const { Wcovid } = useWorldCovid()
  const { country, setCountry } = useCountry()
  const [Lan, setLan] = useState(L.English)
  const { Gstats } = useGetCovidStatsByGeo()
  console.log(Gstats)

  useEffect(() => {
    document.title = Lan.windowtitle
  }, [Lan])

  return (
    <div className={styles.pg}>
      <Home
        country={country.Country}
        countryC={country.CountryCode}
        worldcovidcomponent={
          <WorldInfo
            titles={Lan.cards}
            tcases={Wcovid.totalcases}
            tdeaths={Wcovid.totaldeaths}
            trec={Wcovid.totalrecovered}

            tdcases={Wcovid.todaycases}
            tddeaths={Wcovid.todaydeaths}
            tdrec={Wcovid.todayrecovered}
            active={Wcovid.activecases}
            crit={Wcovid.critical}
          />
        }
      />


      <CurrentCountry
        titles={Lan.cards}
        flag={country.CountryCode}
        country={country.Country}
        tcases={Gstats.totalcases}
        tdeaths={Gstats.totaldeaths}
        trec={Gstats.totalrecovered}

        tdcases={Gstats.todaycases}
        tddeaths={Gstats.todaydeaths}
        tdrec={Gstats.todayrecovered}
        active={Gstats.activecases}
        crit={Gstats.critical}
      />
    </div>

  )
}
export default App
