import React, { useEffect, useState } from "react"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import HM from "./../UI/home"
import axios from "axios"
import { Language as L } from "./../UI/language"
//gettingg geo location
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
  }, [])

  return { Country }
}
//getting world covid cases
const WorldCovid = async () => {
  const Response = await axios
    .get(`https://disease.sh/v3/covid-19/all`)
    .then((res) => res.data)
  return Response
}

WorldCovid().then((res) => console.log(res))



const useWorldCovid = () => {
  const [Wcovid, setWcovid] = useState({

  })

  useEffect(() => {

  }, [])
}

const App = () => {
  const { Country } = useCountry()
  const [Lan, setLan] = useState(L.English)
  useEffect(() => {
    document.title = Lan.windowtitle
  })

  return (
    <div className={styles.pg}>
      <HM
        country={Country.Country}
        countryC={Country.CountryCode}
        textdesc={Lan.homepara}
        bored={Lan.bored}
      />
    </div>
  )
}
export default App
