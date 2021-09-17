import React, { useEffect, useState } from "react"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Home from "./../src/UI/home"
import { Language as L } from "./../src/UI/language"
import WorldInfo from './../src/UI/WorldWideInfo'
import CurrentCountry from "../src/UI/CurrentCountry"
import coffin from './../public/coffin.png'
import { Search } from './../src/UI/SVG'
import Link from 'next/link'
import CovidSearch from './../src/UI/search'
import useCountry from './../src/useHooks/useCountry'
import useWorldCovid from './../src/useHooks/useWorldcovid'
import useGetCovidStatsByGeo from './../src/useHooks/useGetCovidStatsByGeo'
import useSearch from './../src/useHooks/useSearch'
const App = () => {
  const { Wcovid } = useWorldCovid()
  const { country, setCountry } = useCountry()
  const [Lan, setLan] = useState(L.English)
  const [vsble, setVisibility] = useState("block")
  const { Gstats } = useGetCovidStatsByGeo()
  const { result, handleSearch, countrysearch, setCountrySearch } = useSearch()

  console.log({ result })

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
            <div style={{ width: "100%", height: "100%" }} >
              <input type="text" placeholder="Enter Country" value={countrysearch} onChange={e => setCountrySearch(e.target.value)} />
              <button type={"submit"} onClick={handleSearch} >
                <Search />
              </button>
            </div>

          </div>
          <p></p>
          <Link href="/world">{Lan.worldlist}</Link>
          <br /><br />
          <CovidSearch
            visibility={vsble}
            flag={result.flag}
            titles={Lan.cards}


            country={result.country}
            tcases={result.totalcases}
            tdeaths={result.totaldeaths}
            trec={result.totalrecovered}

            tdcases={result.todaycases}
            tddeaths={result.todaydeaths}
            tdrec={result.todayrecovered}
            active={result.activecases}
            crit={result.critical}
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
