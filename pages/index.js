import React, { useEffect, useState } from "react"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import HM from "./../UI/home"
import axios from "axios"
import { Language as L } from "./../UI/language"

const GetGeo = async () => {
  const Response = await axios
    .get(`http://ip-api.com/json`)
    .then((res) => res.data)
  return Response
}

GetGeo().then((res) => {
  console.log(res)
})
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

export default function App() {
  useEffect(() => {
    document.title = "SARSHUBE | THE COVID19 TRACKER"
  })

  const { Country } = useCountry()
  const [Lan, setLan] = useState(L.English)
  return (
    <div className={styles.pg}>
      <HM country={Country.Country} countryC={Country.CountryCode} />
    </div>
  )
}
