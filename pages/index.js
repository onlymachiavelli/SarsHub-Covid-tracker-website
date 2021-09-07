import React, { useEffect } from "react"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import HM from "./../UI/home"

export default function App() {
  useEffect(() => {
    document.title = "SARSHUBE | THE COVID19 TRACKER"
  })
  return (
    <div className={styles.pg}>
      <HM />
    </div>
  )
}
