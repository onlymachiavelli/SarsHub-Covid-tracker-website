import React, { useEffect, useState } from "react"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Home from "./../src/UI/home"
import axios from "axios"
import { Language as L } from "./../src/UI/language"
import WorldInfo from './../src/UI/WorldWideInfo'
import CurrentCountry from "../src/UI/CurrentCountry"
import coffin from './../public/coffin.png'
import { Search } from './../src/UI/SVG'
import Link from 'next/link'
import CovidSearch from './../src/UI/search'


//to remove
import WorldCovid from './../src/apiCall/worldcovid'
import GetGeo from './../src/apiCall/geo'

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
  const [vsble, setVisibility] = useState(false)
  const { Gstats } = useGetCovidStatsByGeo()
  const [countrysearch, setCountrySearch] = useState("")

  useEffect(() => {
    document.title = Lan.windowtitle
  }, [Lan])

  return (
    <div className={styles.pg}>
      <div id="page">
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

        <div style={{ textAlign: "center", paddingTop: "30px", display: "block" }}><Image src={coffin} width="500" height="250" /></div>
        <div className={styles.searchinp}>
          <p className={styles.gl_title}>
            {Lan.cosearch}
          </p>
          <div className={styles.input}>
            <form style={{ width: "100%", height: "100%" }}>
              <input type="text" placeholder="Enter Country" />
              <button type={"submit"}>
                <Search />
              </button>
            </form>

          </div>
          <p></p>
          <Link href="/world">{Lan.worldlist}</Link>
          <CovidSearch
            style={{ display: vsble }}
          />
        </div>
        <br /><br />

      </div>
      <div id="what" style={{ color: "#fff" }}>
        ARE YOU USING NOKIA 3310 !!!!!
        GET SOMETHING BIG !
        THESE ARE THE ONLY INFORMATIONS THAT CAN FIT IN YOUR SCREEN !
        <br />
        World Infos
        <br />
        {Lan.cards.totalcases + " : " + Wcovid.totalcases}
        <br />
        {Lan.cards.totaldeathcases + " : " + Wcovid.totaldeaths}
        <br />
        {Lan.cards.totalrecoveredcases + " : " + Wcovid.totalrecovered}
        <br />
        {Lan.cards.todaycases + " : + " + Wcovid.todaycases}
        <br />
        {Lan.cards.todaydeaths + " : + " + Wcovid.todaydeaths}
        <br />
        {Lan.cards.todayrecovered + " : + " + Wcovid.todayrecovered}
        <br />
        {Lan.cards.activecases + " : " + Wcovid.activecases}
        <br />
        {Lan.cards.critical + " : " + Gstats.critical}
        <br /><br />
        {country.Country + " Informations"}

        <br />
        {Lan.cards.totalcases + " : " + Gstats.totalcases}
        <br />
        {Lan.cards.totaldeathcases + " : " + Gstats.totaldeaths}
        <br />
        {Lan.cards.totalrecoveredcases + " : " + Gstats.totalrecovered}
        <br />

        {Lan.cards.todaycases + " : + " + Gstats.todaycases}
        <br />
        {Lan.cards.todaydeaths + " : + " + Gstats.todaydeaths}
        <br />
        {Lan.cards.todayrecovered + " : + " + Gstats.todayrecovered}
        <br />
        {Lan.cards.activecases + " : " + Gstats.activecases}
        <br />
        {Lan.cards.critical + " : " + Gstats.critical}
      </div>
    </div >


  )
}
export default App
