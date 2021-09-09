import React, { useEffect, useState } from "react"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Home from "./../UI/home"
import axios from "axios"
import { Language as L } from "./../UI/language"
import WorldInfo from './../UI/WorldWideInfo'
const GetGeo = async () => {
  const Response = await axios
    .get(`http://ip-api.com/json`)
    .then((res) => res.data)
  return Response
}

const useCountry = () => {
  const [Country, setCountry] = useState({
    CountryCode: "",
    Country: "",
  })
  useEffect(() => {
    GetGeo().then((Res) => {
      setCountry({
        CountryCode: Res.countryCode,
        Country: Res.country,
      })
    })
  }, [Country])

  return { Country }
}
const WorldCovid = async () => {
  const Response = await axios
    .get(`https://disease.sh/v3/covid-19/all`)
    .then((res) => res.data)
  return Response
}
const useWorldCovid = () => {
  const [Wcovid, setWcovid] = useState({})
  useEffect(() => {
    WorldCovid().then(
      (Response) => {
        setWcovid({
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
  }, [])
  return { Wcovid }
}


const CoByCountr = async (Country) => {
  const Response = await axios
    .get(`https://disease.sh/v3/covid-19/countries/${Country}`)
    .then((res) => res.data)
  return Response
}



const GetCovidStatsByGeo = () => {
  const [Gstats, setGstats] = useState({})
  let [myCountry, setMyCountry] = useState("")
  useEffect(() => {
    GetGeo().then(
      (res) => {
        setMyCountry(res)
      }
    )
    CoByCountr(myCountry).then(
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
  }, [])
  return { Gstats }
}
const App = () => {
  const { Wcovid } = useWorldCovid()
  const { Country } = useCountry()
  const [Lan, setLan] = useState(L.English)
  const { Gstats } = GetCovidStatsByGeo()


  useEffect(() => {
    document.title = Lan.windowtitle
  })

  return (
    <div className={styles.pg}>
      <Home
        country={Country.Country}
        countryC={Country.CountryCode}
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
    </div>

  )
}
export default App
